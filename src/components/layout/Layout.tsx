import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollManager from "./ScrollManager";

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
