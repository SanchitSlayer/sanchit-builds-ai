// Decides whether the hero should start in 3D or show the flat drawing.

export type Support = {
  webgl: boolean;
  reducedMotion: boolean;
  lowEnd: boolean;
  smallScreen: boolean;
};

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function detectSupport(): Support {
  const nav = navigator as Navigator & { deviceMemory?: number };
  return {
    webgl: hasWebGL(),
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    // Under 4 GB of memory or under 4 CPU cores counts as low-end.
    lowEnd: (nav.deviceMemory ?? 8) < 4 || (nav.hardwareConcurrency ?? 8) < 4,
    smallScreen: window.matchMedia("(max-width: 767px)").matches,
  };
}

// 3D starts by itself only when nothing argues against it.
// Everyone else sees the drawing, with a button to opt in if WebGL works.
export const startsIn3D = (s: Support) => s.webgl && !s.reducedMotion && !s.lowEnd && !s.smallScreen;
