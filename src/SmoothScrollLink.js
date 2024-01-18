// SmoothScrollLink.js
import React, { useEffect } from "react";

const SmoothScrollLink = ({ targetId, children }) => {
  useEffect(() => {
    const smoothScrollToTarget = (event) => {
      event.preventDefault(); // Evita o comportamento padrão do link
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const linkElement = document.querySelector(`.Navigation-link[href='#${targetId}']`);
    if (linkElement) {
      linkElement.addEventListener("click", smoothScrollToTarget);
    }

    return () => {
      if (linkElement) {
        linkElement.removeEventListener("click", smoothScrollToTarget);
      }
    };
  }, [targetId]);

  return <>{children}</>;
};

export default SmoothScrollLink;
