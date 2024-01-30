import { useState, useEffect } from "react";

export default function useScrollY() {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScrollY = () => {
    const newScrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollY(newScrollY);
  };

  useEffect(() => {
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return scrollY;
}
