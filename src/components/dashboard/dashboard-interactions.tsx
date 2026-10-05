"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DashboardInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    const dash = document.getElementById("dash");
    if (!dash) return;

    const handler = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const btn = target?.closest<HTMLElement>("[data-sb-toggle]");
      if (!btn) return;
      e.preventDefault();
      // Desktop: toggle collapsed, mobile: toggle drawer via sb-open
      if (window.innerWidth < 1024) {
        dash.classList.toggle("sb-open");
      } else {
        dash.classList.toggle("is-collapsed");
      }
    };

    const closeBackdrop = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(".sb-backdrop")) {
        dash.classList.remove("sb-open");
      }
    };

    document.addEventListener("click", handler);
    document.addEventListener("click", closeBackdrop);

    // Close drawer on route change
    dash.classList.remove("sb-open");

    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("click", closeBackdrop);
    };
  }, [pathname]);

  return null;
}
