import { REQUEST } from "../_constants";
import { get } from "./fetch";
import { WPLOCAL } from "../_constants";

const rootPath = window.location.pathname === "/";

export const danger = raw => ({ __html: raw });
export const summon = {
  get: {
    gallery: (target, cb = () => {}) => {
      return get(REQUEST.POPUP(target)).then(data => {
        data.format = target.format;
        cb(data);
      });
    },
    video: (target, cb) => {
      cb(target);
    },
    standard: (data, cb) => {
      cb(data);
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
  init: data => {
    if (data) {
      return summon.get[data.format](data);
    }

    return null;
  }
};
