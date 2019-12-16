export const nav = {
  init: () => {
    nav.anchor.init();
    nav.travelOnRdy();
  },
  travelOnRdy: () => {
    const url = new URL(window.location);
    const thePants = url.pathname.split("/").filter(x => x)[0];

    nav.anchor.travelingpants(thePants);
  },
  anchor: {
    init: () => {
      const $a = document
        .getElementsByTagName("nav")[0]
        .getElementsByTagName("a");
      nav.anchor.loop($a);
    },
    loop: arr => {
      Array.from(arr).forEach(anchor => {
        if (arr.hash !== "") nav.anchor.bind(anchor);
      });

      // for (let n = arr.length - 1; n >= 0; n--) {
      //   if (arr[n].hash !== "") nav.anchor.bind(arr[n]);
      // }
    },
    travelingpants: target => {
      if (target) {
        const $target = document.getElementById(target);
        if($target) {
          window.scrollTo(0, $target.offsetTop);
        }
      }
    },
    bind: el => {
      el.onclick = e => {
        const hash = e.target.hash.substring(1);
        nav.anchor.travelingpants(hash);
        // popup.destroy();
        e.stopPropagation();
        e.preventDefault();
      };
    }
  }
};
