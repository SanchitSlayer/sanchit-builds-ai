import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// When the page changes, start at the top, or at the #section the link names
// (e.g. "All work" on a case study goes to /#work). Same-page anchor clicks are left
// to the browser so they keep their smooth scroll.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
    // Only page changes should trigger this, not hash changes on the same page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
