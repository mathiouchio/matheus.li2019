import { WPLOCAL } from "../_constants";
import { summon } from "./dom";
import popup from "./popup";
import { get } from "./fetch";

const rootPath = window.location.pathname === "/";

export const route = {
  init: () => {
    route.bind();
    route.detect();
  },
  go: pathname => {
    if (pathname) {
      const url = new URL(window.location);
      url.pathname = pathname;
      // history.pushState({ state: pathname }, null, url.href);
    }
  },
  detect: () => {
    let path = window.location.pathname; // get paths

    if (!rootPath) {
      path = path
        .substring(1, path.length) // kill first and last char
        .split("/"); // make an array

      path = path.filter(e => {
        // kill empty string
        return String(e).trim();
      });

      if (path.length) {
        get(`${WPLOCAL.apiURL}${path[0]}?slug=${path[1]}`).then(data => {
          summon.init(data[0]);
        });
      }
    }
  },
  bind: () => {
    window.onpopstate = e => {
      if (rootPath) {
        popup.destroy();
      } else {
        route.detect();
      }
    };
  }
};

export default route;
