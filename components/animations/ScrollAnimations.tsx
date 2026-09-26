"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --------------------------------------------------
      // Generic reveal elements
      // --------------------------------------------------

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(
        (element) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      );

      // --------------------------------------------------
      // Fade + slight scale
      // --------------------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-reveal-scale]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0.96,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 82%",
                once: true,
              },
            }
          );
        });

      // --------------------------------------------------
      // Horizontal divider reveal
      // --------------------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-line]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

      // --------------------------------------------------
      // Staggered children
      // --------------------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-stagger]")
        .forEach((container) => {
          const children = Array.from(container.children);

          gsap.fromTo(
            children,
            {
              opacity: 0,
              y: 25,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: container,
                start: "top 82%",
                once: true,
              },
            }
          );
        });

      // --------------------------------------------------
      // Slow dreamy floating elements
      // --------------------------------------------------

      gsap.utils
        .toArray<HTMLElement>("[data-float]")
        .forEach((element) => {
          gsap.to(element, {
            y: -8,
            rotation: 0.4,
            duration: 4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });

      // --------------------------------------------------
      // Refresh after everything has mounted
      // --------------------------------------------------

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
}