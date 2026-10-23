// Decides whether the hero should start in 3D or show the flat drawing.

export type Support = {
  webgl: boolean;
  reducedMotion: boolean;
  lowEnd: boolean;
  smallScreen: boolean;
  touch: boolean;
};

// Cheap: does the browser have WebGL at all? Used to decide whether to offer the 3D button.
const webglAvailable = () => typeof WebGLRenderingContext !== "undefined";

// Expensive (it spins up a real GPU context), so it only runs on devices about to start 3D.
export function canCreateWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return Boolean(gl);
  } catch {
    return false;
  }
}

export function detectSupport(): Support {
  const nav = navigator as Navigator & { deviceMemory?: number };
  // Development only: ?motion=reduce or ?webgl=0 in the URL fakes those settings for testing.
  const force = import.meta.env.DEV ? new URLSearchParams(window.location.search) : null;
  return {
    webgl: force?.get("webgl") === "0" ? false : webglAvailable(),
    reducedMotion: force?.get("motion") === "reduce" || window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    // Under 4 GB of memory or under 4 CPU cores counts as low-end.
    lowEnd: (nav.deviceMemory ?? 8) < 4 || (nav.hardwareConcurrency ?? 8) < 4,
    smallScreen: window.matchMedia("(max-width: 767px)").matches,
    touch: window.matchMedia("(pointer: coarse)").matches,
  };
}

// 3D starts by itself only when nothing argues against it.
// Everyone else sees the drawing, with a button to opt in if WebGL works.
export const startsIn3D = (s: Support) => s.webgl && !s.reducedMotion && !s.lowEnd && !s.smallScreen;
