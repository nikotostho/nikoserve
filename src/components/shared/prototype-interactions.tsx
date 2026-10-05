"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const HTML_NS = "http://www.w3.org/2000/svg";

function asElement(target: EventTarget | null): Element | null {
  if (target instanceof Element) return target;
  return target instanceof Node ? target.parentElement : null;
}

function makeToastIcon(): SVGSVGElement {
  const svg = document.createElementNS(HTML_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2.2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  const path = document.createElementNS(HTML_NS, "path");
  path.setAttribute("d", "M20 6 9 17l-5-5");
  svg.append(path);
  return svg;
}

export default function PrototypeInteractions() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const toastTimers: number[] = [];
    const intervals: number[] = [];
    const listeners: Array<() => void> = [];
    const observers: IntersectionObserver[] = [];
    let previousBodyOverflow = document.body.style.overflow;

    const addListener = <K extends keyof DocumentEventMap>(
      target: Document | Window,
      type: K,
      listener: (event: DocumentEventMap[K]) => void,
      options?: AddEventListenerOptions | boolean,
    ) => {
      target.addEventListener(type, listener as EventListener, options);
      listeners.push(() => target.removeEventListener(type, listener as EventListener, options));
    };

    const toast = (message: string) => {
      const stack = document.querySelector<HTMLElement>("[data-toast-stack]");
      if (!stack || !message) return;

      const item = document.createElement("div");
      item.className = "toast";
      item.append(makeToastIcon());
      const label = document.createElement("span");
      label.textContent = message;
      item.append(label);
      stack.append(item);

      const fadeTimer = window.setTimeout(() => {
        item.style.opacity = "0";
        item.style.transform = "translateY(6px)";
        item.style.transition = ".25s";
      }, 2_400);
      const removeTimer = window.setTimeout(() => item.remove(), 2_750);
      toastTimers.push(fadeTimer, removeTimer);
    };

    const syncBodyOverflow = () => {
      const hasOverlay = document.querySelector(".modal.is-open, .drawer.is-open");
      if (hasOverlay) {
        if (document.body.style.overflow !== "hidden") {
          previousBodyOverflow = document.body.style.overflow;
        }
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = previousBodyOverflow;
      }
    };

    const closeDropdowns = (except?: Element | null) => {
      document.querySelectorAll<HTMLElement>("[data-dropdown-menu].is-open").forEach((menu) => {
        const owner = menu.closest("[data-dropdown]");
        if (!except || !owner?.contains(except)) menu.classList.remove("is-open");
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = asElement(event.target);
      if (!target) return;

      // Clicking elsewhere closes suggestion panels and open dropdowns.
      document.querySelectorAll<HTMLElement>("[data-search-panel].is-open").forEach((panel) => {
        if (!panel.closest("[data-search-box]")?.contains(target)) panel.classList.remove("is-open");
      });

      const dropdownTrigger = target.closest<HTMLElement>("[data-dropdown-toggle]");
      closeDropdowns(dropdownTrigger);
      if (dropdownTrigger) {
        event.preventDefault();
        const menu = dropdownTrigger.parentElement?.querySelector<HTMLElement>("[data-dropdown-menu]");
        menu?.classList.toggle("is-open");
        return;
      }

      const modalTrigger = target.closest<HTMLElement>("[data-modal-open]");
      if (modalTrigger) {
        event.preventDefault();
        const id = modalTrigger.getAttribute("data-modal-open");
        if (id) document.getElementById(id)?.classList.add("is-open");
        syncBodyOverflow();
        return;
      }

      const drawerTrigger = target.closest<HTMLElement>("[data-drawer-open]");
      if (drawerTrigger) {
        event.preventDefault();
        const id = drawerTrigger.getAttribute("data-drawer-open");
        if (id) document.getElementById(id)?.classList.add("is-open");
        syncBodyOverflow();
        return;
      }

      const modalClose = target.closest<HTMLElement>("[data-modal-close]");
      if (modalClose) {
        modalClose.closest(".modal")?.classList.remove("is-open");
        syncBodyOverflow();
      }

      const drawerClose = target.closest<HTMLElement>("[data-drawer-close]");
      if (drawerClose) {
        drawerClose.closest(".drawer")?.classList.remove("is-open");
        syncBodyOverflow();
      }

      const modalBackdrop = target.classList.contains("modal-backdrop") ? target : null;
      if (modalBackdrop) {
        modalBackdrop.closest(".modal")?.classList.remove("is-open");
        syncBodyOverflow();
      }

      const drawerBackdrop = target.classList.contains("drawer-backdrop") ? target : null;
      if (drawerBackdrop) {
        drawerBackdrop.closest(".drawer")?.classList.remove("is-open");
        syncBodyOverflow();
      }

      const quantityButton = target.closest<HTMLElement>("[data-qty]");
      if (quantityButton) {
        event.preventDefault();
        const box = quantityButton.closest<HTMLElement>("[data-qty-box]");
        const input = box?.querySelector<HTMLInputElement>("input");
        if (input) {
          const value = Number.parseInt(input.value || "1", 10);
          const min = Number.parseInt(input.min || "1", 10);
          const max = Number.parseInt(input.max || "999", 10);
          input.value = String(
            quantityButton.getAttribute("data-qty") === "up"
              ? Math.min(max, value + 1)
              : Math.max(min, value - 1),
          );
          input.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }

      const chip = target.closest<HTMLElement>("[data-chip-group] .chip");
      if (chip) {
        const group = chip.closest<HTMLElement>("[data-chip-group]");
        if (group?.hasAttribute("data-multi")) {
          chip.classList.toggle("is-active");
        } else if (group) {
          group.querySelectorAll(".chip").forEach((item) => item.classList.remove("is-active"));
          chip.classList.add("is-active");
        }
      }

      const tab = target.closest<HTMLElement>("[data-tab]");
      const tabs = tab?.closest<HTMLElement>("[data-tabs]");
      if (tab && tabs) {
        const value = tab.getAttribute("data-tab");
        tabs.querySelectorAll("[data-tab]").forEach((item) => item.classList.remove("is-active"));
        tab.classList.add("is-active");
        const scope = tabs.getAttribute("data-tabs-scope");
        const container = scope ? document.querySelector(scope) : tabs.parentElement;
        container?.querySelectorAll<HTMLElement>("[data-tab-panel]").forEach((panel) => {
          panel.hidden = panel.getAttribute("data-tab-panel") !== value;
        });
      }

      const accordion = target.closest<HTMLElement>("[data-acc]");
      if (accordion) {
        const panel = accordion.nextElementSibling as HTMLElement | null;
        const isOpen = accordion.getAttribute("aria-expanded") === "true";
        if (accordion.hasAttribute("data-acc-single")) {
          accordion.closest("[data-acc-group]")?.querySelectorAll<HTMLElement>("[data-acc]").forEach((item) => {
            if (item !== accordion) {
              item.setAttribute("aria-expanded", "false");
              if (item.nextElementSibling instanceof HTMLElement) item.nextElementSibling.style.display = "none";
            }
          });
        }
        accordion.setAttribute("aria-expanded", String(!isOpen));
        if (panel) panel.style.display = isOpen ? "none" : "block";
      }

      const railControl = target.closest<HTMLElement>("[data-rail-prev], [data-rail-next]");
      if (railControl) {
        const wrap = railControl.closest<HTMLElement>("[data-rail-wrap]") ?? railControl.parentElement;
        const rail = wrap?.querySelector<HTMLElement>("[data-rail]");
        if (rail) {
          const amount = Math.max(rail.clientWidth * 0.8, 240);
          rail.scrollBy({
            left: railControl.hasAttribute("data-rail-prev") ? -amount : amount,
            behavior: "smooth",
          });
        }
      }

      const galleryThumb = target.closest<HTMLElement>("[data-gallery-thumb]");
      if (galleryThumb) {
        const gallery = galleryThumb.closest<HTMLElement>("[data-gallery]");
        const stage = gallery?.querySelector<HTMLElement>("[data-gallery-stage]");
        gallery?.querySelectorAll<HTMLElement>("[data-gallery-thumb]").forEach((item) => {
          item.classList.remove("ring-2", "ring-brand-500");
          (item as HTMLElement).style.borderColor = "";
        });
        galleryThumb.classList.add("ring-2", "ring-brand-500");
        galleryThumb.style.borderColor = "#ff2525";
        const preview = galleryThumb.querySelector<HTMLElement>(".ph");
        const tone = preview?.className.match(/ph-[a-j]/)?.[0];
        if (stage && tone) {
          stage.className = `${stage.className.replace(/ph-[a-j]/g, "")} ${tone}`.trim();
          stage.setAttribute("data-active", galleryThumb.getAttribute("data-gallery-thumb") ?? "");
        }
      }

      const variant = target.closest<HTMLElement>("[data-variant]");
      if (variant) {
        const group = variant.closest<HTMLElement>("[data-variant-group]");
        group?.querySelectorAll<HTMLElement>("[data-variant]").forEach((item) => {
          item.classList.remove("border-brand-500", "text-brand-600", "bg-brand-50");
          item.style.borderColor = "";
          item.style.color = "";
          item.style.background = "";
        });
        variant.style.borderColor = "#ff2525";
        variant.style.color = "#cf0505";
        variant.style.background = "#fff1f1";
        const scope = variant.closest<HTMLElement>("[data-variant-scope]") ?? document;
        const output = scope.querySelector<HTMLElement>("[data-variant-out]");
        if (output) output.textContent = variant.getAttribute("data-variant") ?? "";
      }

      const showMoreButton = target.closest<HTMLElement>("[data-show-more]");
      if (showMoreButton) {
        const selector = showMoreButton.getAttribute("data-show-more");
        const content = selector ? document.querySelector<HTMLElement>(selector) : null;
        if (content) {
          content.hidden = !content.hidden;
          const label = showMoreButton.querySelector<HTMLElement>("[data-show-more-label]");
          if (label) label.textContent = content.hidden ? "Show more" : "Show less";
        }
      }

      const viewButton = target.closest<HTMLElement>("[data-view]");
      const viewToggle = viewButton?.closest<HTMLElement>("[data-view-toggle]");
      if (viewButton && viewToggle) {
        viewToggle.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
        viewButton.classList.add("is-active");
        const selector = viewToggle.getAttribute("data-view-target");
        const container = selector ? document.querySelector<HTMLElement>(selector) : null;
        container?.setAttribute("data-mode", viewButton.getAttribute("data-view") === "list" ? "list" : "grid");
      }

      const passwordToggle = target.closest<HTMLElement>("[data-pass-toggle]");
      if (passwordToggle) {
        const id = passwordToggle.getAttribute("data-pass-toggle");
        const input = id ? document.getElementById(id) : null;
        if (input instanceof HTMLInputElement) {
          input.type = input.type === "password" ? "text" : "password";
          passwordToggle.setAttribute("aria-pressed", String(input.type === "text"));
          passwordToggle.style.color = input.type === "text" ? "#ff2525" : "";
        }
      }

      const copyButton = target.closest<HTMLElement>("[data-copy]");
      if (copyButton) {
        const value = copyButton.getAttribute("data-copy") ?? "";
        if (navigator.clipboard?.writeText) void navigator.clipboard.writeText(value);
        toast(`Copied: ${value}`);
      }

      const toggle = target.closest<HTMLElement>("[data-toggle-class]");
      if (toggle) {
        const className = toggle.getAttribute("data-toggle-class") || "is-on";
        toggle.classList.toggle(className);
        if (!toggle.hasAttribute("data-toast")) {
          toast(toggle.classList.contains(className) ? "Added to your wishlist" : "Removed from your wishlist");
        }
      }

      const cartAction = target.closest<HTMLElement>("[data-cart-add], [data-toast]");
      const toastMessage = cartAction?.getAttribute("data-toast");
      if (cartAction) {
        if (cartAction.hasAttribute("data-cart-add") || /add(?:ed)? to cart|bundle added to cart/i.test(toastMessage ?? "")) {
          document.querySelectorAll<HTMLElement>("[data-cart-count]").forEach((badge) => {
            const count = Number.parseInt(badge.textContent ?? "0", 10) || 0;
            badge.textContent = String(count + 1);
          });
        }
        if (toastMessage) toast(toastMessage);
        else if (cartAction.hasAttribute("data-cart-add")) toast("Item added to cart");
      }
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (form.hasAttribute("data-search-form")) {
        event.preventDefault();
        const search = form.querySelector<HTMLInputElement>('input[type="search"]');
        const query = search?.value.trim();
        form.closest("[data-search-box]")?.querySelector("[data-search-panel]")?.classList.remove("is-open");
        if (query) router.push(`/search?q=${encodeURIComponent(query)}`);
        return;
      }
      if (form.hasAttribute("data-prevent-submit")) event.preventDefault();
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = asElement(event.target);
      const box = target?.closest<HTMLElement>("[data-search-box]");
      box?.querySelector<HTMLElement>("[data-search-panel]")?.classList.add("is-open");
    };

    const onInput = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      const otpBox = target.closest<HTMLElement>("[data-otp]");
      if (otpBox) {
        target.value = target.value.replace(/\D/g, "").slice(0, 1);
        if (target.value) {
          const cells = Array.from(otpBox.querySelectorAll<HTMLInputElement>("input"));
          const nextCell = cells[cells.indexOf(target) + 1];
          nextCell?.focus();
        }
      }

      const range = target.closest<HTMLElement>("[data-range]");
      if (range) {
        const lower = range.querySelector<HTMLInputElement>("[data-range-min]");
        const upper = range.querySelector<HTMLInputElement>("[data-range-max]");
        if (lower && upper) {
          const minValue = Math.min(Number(lower.value), Number(upper.value));
          const maxValue = Math.max(Number(lower.value), Number(upper.value));
          const maximum = Number(lower.max) || 100;
          const fill = range.querySelector<HTMLElement>("[data-range-fill]");
          if (fill) {
            fill.style.left = `${(minValue / maximum) * 100}%`;
            fill.style.right = `${100 - (maxValue / maximum) * 100}%`;
          }
          const minOutput = range.querySelector<HTMLInputElement>("[data-range-min-out]");
          const maxOutput = range.querySelector<HTMLInputElement>("[data-range-max-out]");
          if (minOutput) minOutput.value = String(minValue);
          if (maxOutput) maxOutput.value = String(maxValue);
        }
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDropdowns();
        document.querySelectorAll(".modal.is-open, .drawer.is-open").forEach((item) => item.classList.remove("is-open"));
        syncBodyOverflow();
      }

      const target = event.target;
      if (!(target instanceof HTMLInputElement) || event.key !== "Backspace" || target.value) return;
      const otpBox = target.closest<HTMLElement>("[data-otp]");
      if (!otpBox) return;
      const cells = Array.from(otpBox.querySelectorAll<HTMLInputElement>("input"));
      const previousCell = cells[cells.indexOf(target) - 1];
      previousCell?.focus();
    };

    const onChange = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement) || !target.hasAttribute("data-check-all")) return;
      const scope = target.closest("table") ?? document;
      scope.querySelectorAll<HTMLInputElement>("[data-check-row]").forEach((checkbox) => {
        checkbox.checked = target.checked;
      });
      const bulkBar = document.querySelector<HTMLElement>(target.getAttribute("data-bulkbar") || ".bulkbar");
      bulkBar?.classList.toggle("is-on", target.checked);
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = asElement(event.target);
      const star = target?.closest<HTMLElement>("[data-rate-star]");
      const rating = star?.closest<HTMLElement>("[data-rate]");
      if (!star || !rating) return;
      const stars = Array.from(rating.querySelectorAll<HTMLElement>("[data-rate-star]"));
      const activeIndex = stars.indexOf(star);
      stars.forEach((item, index) => (item.style.color = index <= activeIndex ? "#ffb020" : "#d8dce4"));
    };

    const onRateClick = (event: MouseEvent) => {
      const target = asElement(event.target);
      const star = target?.closest<HTMLElement>("[data-rate-star]");
      const rating = star?.closest<HTMLElement>("[data-rate]");
      if (!star || !rating) return;
      const stars = Array.from(rating.querySelectorAll<HTMLElement>("[data-rate-star]"));
      const score = stars.indexOf(star) + 1;
      rating.setAttribute("data-value", String(score));
      const output = rating.querySelector<HTMLElement>("[data-rate-out]");
      if (output) output.textContent = `${score}.0`;
    };

    const onMouseOut = (event: MouseEvent) => {
      const target = asElement(event.target);
      const rating = target?.closest<HTMLElement>("[data-rate]");
      if (!rating || (event.relatedTarget instanceof Node && rating.contains(event.relatedTarget))) return;
      const selected = Number(rating.getAttribute("data-value")) || 0;
      rating.querySelectorAll<HTMLElement>("[data-rate-star]").forEach((star, index) => {
        star.style.color = index < selected ? "#ffb020" : "#d8dce4";
      });
    };

    addListener(document, "click", onClick);
    addListener(document, "submit", onSubmit);
    addListener(document, "focusin", onFocusIn);
    addListener(document, "input", onInput);
    addListener(document, "keydown", onKeyDown);
    addListener(document, "change", onChange);
    addListener(document, "mouseover", onMouseOver);
    addListener(document, "click", onRateClick);
    addListener(document, "mouseout", onMouseOut);

    // Initialize page-scoped controls after each App Router navigation.
    document.querySelectorAll<HTMLElement>("[data-slider]").forEach((slider) => {
      const track = slider.querySelector<HTMLElement>("[data-slides]");
      const slides = track ? Array.from(track.children) as HTMLElement[] : [];
      const dots = Array.from(slider.querySelectorAll<HTMLElement>("[data-slide-dots] button"));
      if (!track || slides.length < 2) return;
      let index = 0;
      const draw = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("is-active", dotIndex === index);
          dot.style.width = dotIndex === index ? "22px" : "8px";
          dot.style.opacity = dotIndex === index ? "1" : ".45";
        });
      };
      const step = (direction: number) => {
        index = (index + direction + slides.length) % slides.length;
        draw();
      };
      const previous = slider.querySelector<HTMLElement>("[data-slide-prev]");
      const next = slider.querySelector<HTMLElement>("[data-slide-next]");
      const onPrevious = () => step(-1);
      const onNext = () => step(1);
      const onDot = (event: MouseEvent) => {
        const dot = asElement(event.target)?.closest("[data-slide-dots] button");
        const dotIndex = dots.indexOf(dot as HTMLElement);
        if (dotIndex < 0) return;
        index = dotIndex;
        draw();
      };
      let timer = window.setInterval(onNext, 5_200);
      const stop = () => {
        window.clearInterval(timer);
      };
      const play = () => {
        window.clearInterval(timer);
        timer = window.setInterval(onNext, 5_200);
      };
      previous?.addEventListener("click", onPrevious);
      next?.addEventListener("click", onNext);
      slider.addEventListener("click", onDot);
      slider.addEventListener("mouseenter", stop);
      slider.addEventListener("mouseleave", play);
      draw();
      listeners.push(() => {
        stop();
        previous?.removeEventListener("click", onPrevious);
        next?.removeEventListener("click", onNext);
        slider.removeEventListener("click", onDot);
        slider.removeEventListener("mouseenter", stop);
        slider.removeEventListener("mouseleave", play);
      });
    });

    document.querySelectorAll<HTMLElement>("[data-countdown]").forEach((box) => {
      const valueSlots = Array.from(box.querySelectorAll<HTMLElement>(".mono"));
      if (valueSlots.length < 3) return;
      const initial = valueSlots.map((slot) => Number.parseInt(slot.textContent ?? "0", 10) || 0);
      const initialSeconds = initial[0] * 3_600 + initial[1] * 60 + initial[2];
      const endTime = Date.now() + (initialSeconds || 3_600) * 1_000;
      const tick = () => {
        const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1_000));
        const hours = Math.floor(remaining / 3_600);
        const minutes = Math.floor((remaining % 3_600) / 60);
        const seconds = remaining % 60;
        [hours, minutes, seconds].forEach((value, index) => {
          if (valueSlots[index]) valueSlots[index].textContent = String(value).padStart(2, "0");
        });
      };
      tick();
      intervals.push(window.setInterval(tick, 1_000));
    });

    document.querySelectorAll<HTMLElement>("[data-gallery]").forEach((gallery) => {
      const firstThumb = gallery.querySelector<HTMLElement>("[data-gallery-thumb]");
      if (firstThumb) firstThumb.click();
    });

    document.querySelectorAll<HTMLElement>("[data-variant-group]").forEach((group) => {
      const first = group.querySelector<HTMLElement>("[data-variant]");
      if (first) first.click();
    });

    document.querySelectorAll<HTMLElement>("[data-range]").forEach((range) => {
      const lower = range.querySelector<HTMLInputElement>("[data-range-min]");
      const upper = range.querySelector<HTMLInputElement>("[data-range-max]");
      if (lower) lower.dispatchEvent(new Event("input", { bubbles: true }));
      else if (upper) upper.dispatchEvent(new Event("input", { bubbles: true }));
    });

    document.querySelectorAll<HTMLElement>("[data-search-box]").forEach((box) => {
      const panel = box.querySelector<HTMLElement>("[data-search-panel]");
      if (!panel) return;
      const input = box.querySelector<HTMLInputElement>("input");
      if (document.activeElement === input) panel.classList.add("is-open");
    });

    const stickyHeader = document.querySelector<HTMLElement>("[data-sticky-head]");
    if (stickyHeader) {
      const onScroll = () => {
        stickyHeader.classList.toggle("shadow-soft", window.scrollY > 8);
        stickyHeader.classList.toggle("is-stuck", window.scrollY > 8);
      };
      addListener(window, "scroll", onScroll, { passive: true });
      onScroll();
    }

    const backToTop = document.querySelector<HTMLElement>("[data-to-top]");
    if (backToTop) {
      const onScroll = () => {
        backToTop.style.opacity = window.scrollY > 500 ? "1" : "0";
        backToTop.style.pointerEvents = window.scrollY > 500 ? "auto" : "none";
      };
      const onTopClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
      addListener(window, "scroll", onScroll, { passive: true });
      backToTop.addEventListener("click", onTopClick);
      listeners.push(() => backToTop.removeEventListener("click", onTopClick));
      onScroll();
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.style.transform = "none";
            observer.unobserve(element);
          });
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(14px)";
        element.style.transition = `opacity .5s ease ${(index % 6) * 40}ms, transform .5s cubic-bezier(.21,1,.21,1) ${(index % 6) * 40}ms`;
        observer.observe(element);
      });
      observers.push(observer);
    }

    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    document.querySelectorAll<HTMLAnchorElement>("[data-bottom-nav] a").forEach((link) => {
      const destination = new URL(link.href, window.location.origin).pathname.replace(/\/$/, "") || "/";
      if (destination === currentPath) link.style.color = "#ff2525";
      else link.style.color = "";
    });

    return () => {
      listeners.forEach((cleanup) => cleanup());
      observers.forEach((observer) => observer.disconnect());
      toastTimers.forEach((timer) => window.clearTimeout(timer));
      intervals.forEach((timer) => window.clearInterval(timer));
      document.querySelector<HTMLElement>("[data-toast-stack]")?.replaceChildren();
      document.querySelectorAll(".modal.is-open, .drawer.is-open").forEach((item) => item.classList.remove("is-open"));
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [pathname, router]);

  return <div className="toast-stack" data-toast-stack aria-live="polite" aria-atomic="false" />;
}
