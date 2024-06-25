"use client";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect, useState } from "react";

export const mediaQuery = {
  md: "width < 768px",
  lg: "768px <= width",
};

export const useMediaQuery = (query: any) => {
  const formattedQuery = `(${query})`;
  const [match, setMatch] = useState(false);

  useEffect(() => {
    setMatch(matchMedia(formattedQuery).matches);
    const mql = matchMedia(formattedQuery);

    if (mql.media === "not all" || mql.media === "invalid") {
      console.error(`useMediaQuery Error: Invalid media query`);
    }

    mql.onchange = (e) => {
      setMatch(e.matches);
    };

    return () => {
      mql.onchange = null;
    };
  }, [formattedQuery, setMatch]);

  return match;
};
