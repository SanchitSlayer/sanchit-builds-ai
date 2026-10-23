import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { Box, X } from "lucide-react";
import MoleculeStatic from "./MoleculeStatic";
import { detectSupport, startsIn3D, type Support } from "./deviceSupport";

// The 3D code (three.js and friends) is a separate download, fetched only when it is shown.
const Molecule3D = lazy(() => import("./three/Molecule3D"));

// If WebGL crashes or the 3D chunk fails to load, quietly fall back to the drawing.
class Fallback extends Component<{ onError: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function whenIdle(fn: () => void) {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(fn, { timeout: 2500 });
    return () => window.cancelIdleCallback(id);
  }
  const id = setTimeout(fn, 1200);
  return () => clearTimeout(id);
}

const toggleButton =
  "absolute right-0 bottom-0 inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong bg-bg/80 px-4 text-sm text-muted backdrop-blur transition-colors hover:border-accent hover:text-accent-strong";

const ALT =
  "Career map drawn as a molecule: OneMetric at the centre, bonded to the eKYC OCR tool, the intent analyzer, Inventive AI and the Placement Cell, with projects and leadership roles around them.";

export default function HeroVisual() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [support, setSupport] = useState<Support | null>(null);
  const [show3D, setShow3D] = useState(false);
  const [optedIn, setOptedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const [onScreen, setOnScreen] = useState(true);

  // Check the device once, then load 3D after the page has finished its first paint.
  useEffect(() => {
    const s = detectSupport();
    setSupport(s);
    if (startsIn3D(s)) return whenIdle(() => setShow3D(true));
  }, []);

  // Pause the 3D scene while the hero is scrolled out of view.
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const behavior = support?.reducedMotion ? "auto" : "smooth";
    document.getElementById(id)?.scrollIntoView({ behavior });
  };

  const close3D = () => {
    setShow3D(false);
    setReady(false);
    setOptedIn(false);
  };

  const canOptIn = support?.webgl && !show3D;

  return (
    <div ref={wrapper} className="relative h-full w-full">
      <div role="img" aria-label={ALT} className="relative h-full w-full">
        <div className={`h-full w-full transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}>
          <MoleculeStatic decorative />
        </div>

        {show3D && (
          <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
            <Fallback onError={close3D}>
              <Suspense fallback={null}>
                <Molecule3D
                  active={onScreen}
                  reducedMotion={support?.reducedMotion ?? false}
                  onSelect={scrollTo}
                  onReady={() => setReady(true)}
                />
              </Suspense>
            </Fallback>
          </div>
        )}
      </div>

      {ready && (
        <p aria-hidden className="pointer-events-none absolute top-0 left-0 font-mono text-[11px] text-subtle">
          Drag to rotate. Click an atom to jump there.
        </p>
      )}

      {canOptIn && (
        <button
          type="button"
          onClick={() => {
            setOptedIn(true);
            setShow3D(true);
          }}
          className={toggleButton}
        >
          <Box size={16} aria-hidden /> Explore in 3D
        </button>
      )}

      {optedIn && ready && (
        <button
          type="button"
          onClick={close3D}
          className={toggleButton}
        >
          <X size={16} aria-hidden /> Back to image
        </button>
      )}
    </div>
  );
}
