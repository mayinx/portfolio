import { useState, useEffect } from "react";

// Custom hook (inspired by SO and further customized) that reports if a 'relevant' scoll event occured
// Args:
// - 'scrollYOffsetLimit':  Determines the 'ScrollY' (or 'ScrollTop') threshold in pixels, that, when exceeded, indicates a scroll
// - 'scrollProperty':      Defaults to 'scrollY' - pass in another property (like 'scrollTop') if needed
// - 'scrollCntEl':         Optional - the Cnt that is considered as scrollable area. Defaults to the 'window'-obj
//                          FYI: This comes in handy when the window- or document-obj uses an CSS-overflow- &/ height-setting
//                          that collides with the default scrollY-logic, in which case window.scrollY always reports 0, even if
//                          you sroll like a madman om steroids. If that's the case, pass in another container as scrollCnt
//                          (e.g. "main" or whatever)
//
// TODO: Test if window as scroll cnt is correctly detected!
/* TODO: Handle Case: "user performs page reload" */
export const useScrollHandler = (
  scrollYOffsetLimit,
  scrollProperty = "scrollY",
  scrollCntEl = null,
) => {
  const [scroll, setScroll] = useState(false);

  const scrollCnt = scrollCntEl || window;
  const useScrollY = scrollProperty === "scrollY";

  // on mount
  useEffect(() => {
    const onScroll = () => {
      console.log("1");
      const scrollCheck = scrollCnt[scrollProperty] > scrollYOffsetLimit;
      if (scrollCheck !== scroll) {
        console.log("2");
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    scrollCnt.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      scrollCnt.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll, scrollCnt, scrollProperty, scrollYOffsetLimit]);

  return scroll;
};
