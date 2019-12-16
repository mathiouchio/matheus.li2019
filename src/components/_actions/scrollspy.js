import { ohSnap } from "./snap";

export const scrollspy = {
  state: {
    initted: false,
    // positioning store
    triggerPos: 0, // huh?
    sectionPositions: [], // collections of section positions
    // el store
    sections: null, // nodes
    nav: null, // node
    navigations: null // node
  },
  init: function() {
    this.state.initted = true;
    const $body = window.document.body;

    // Poor man React.js
    this.state.sections = !this.state.sections
      ? $body.getElementsByTagName("SECTION")
      : this.state.sections;
    this.state.nav = !this.state.navigations
      ? $body.getElementsByTagName("NAV")
      : this.state.nav;
    this.state.navigations = !this.state.navigations
      ? this.state.nav[0].getElementsByTagName("LI")
      : this.state.navigations;

    // do it after each document finished mounting
    this.calcPositions();
    this.bind();
  },
  calcPositions: function() {
    if (this.state.initted) {
      let i = 0;
      for (const el of this.state.sections) {
        this.state.sectionPositions[i] = el.offsetTop;
        i++;
      }
    }
  },
  bind: function() {
    // event listening window-y position
    window.addEventListener("scroll", () => {
      const { sectionPositions } = this.state;
      let tempPos = 0;
      // triggering switch
      // if current x scroll position doesn't match with current section position?
      for (let i in sectionPositions) {
        if (window.pageYOffset >= sectionPositions[i]) {
          tempPos = parseInt(i, 10); // i came back a string for this type of loop
        }
      }

      /* Only apply rules and styles in between sections:
       * value of positions changed
       */
      if (tempPos != this.state.triggerPos) {
        this.state.triggerPos = tempPos;
        this.nav(this.state.triggerPos);
        this.brand(this.state.triggerPos);
      }
    });
  },
  nav: function(pos) {
    pos--;
    for (const el of this.state.navigations) {
      el.classList.remove("active");
    }
    if (pos >= 0)
      // only do it if needed
      this.state.navigations[pos].className = "active";
  },
  brand: function(i) {
    const $branding = window.document.getElementById("branding");
    ohSnap($branding, i);
  }
};
