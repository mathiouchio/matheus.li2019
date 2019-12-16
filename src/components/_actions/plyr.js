import Plyr from "plyr";
import { POST_TYPE } from "../_constants";

export const plyr = {
  state: {}, // poor man React.js 🤘🏻
  setup: position => {
    if (!this.state.once) {
      this.state.obj = Plyr.setup();
      this.state.once = true;
    }
    this.state.position = position;
  },
  init: (target = 0, reset = false) => {
    if (reset) this.state.once = false;
    this.setup(target);
    this.responsive(target);
    this.eventcheck("ready").then(e => {
      if (!this.state.obj[target].isMuted()) {
        this.state.obj[target].toggleMute();
      }
      // @🐛: ready doesn't always trigger
      this.state.obj[target].play();
    });
    this.state.obj[target].play(); // @🐛: double tap
  },
  videoEl: () => {
    return this.state.obj[this.state.position].getEmbed()
      ? this.state.obj[this.state.position].getEmbed().a
      : this.state.obj[this.state.position].getMedia();
  },
  destroy: () => {
    this.state.obj.map(target => {
      target.destroy();
    });
  },
  fullscreen: () => {
    this.state.obj[this.state.position].toggleFullscreen();
  },
  pause: (target = this.state.position) => {
    this.state.obj[target].pause();
  },
  unmute: () => {
    this.state.obj[this.state.position].toggleMute();
  },
  eventcheck: type => {
    const target = this.videoEl();

    return new Promise((resolve, reject) => {
      /**
       * @eventhandler Metadata loaded.
       * @param {event} e - resolve and pass down event
       */
      function handleEvents(e) {
        target.removeEventListener(type, handleEvents);
        resolve(e);
      }
      target.addEventListener(type, handleEvents);
    });
  },
  mathematics: target => {
    if (target.tagName != "IFRAME" && target.tagName != POST_TYPE.VIDEO)
      target = target.childNodes[0];

    const vHeight = target.height ? target.height : target.videoHeight;
    const vWidth = target.width ? target.width : target.videoWidth;
    const vRatio = vWidth / vHeight;
    const realHeight = window.innerHeight;
    const realWidth = realHeight * vRatio;

    target.width = realWidth;
    target.style.width = `${realWidth}px`;
  },
  responsive: target => {
    const targetVid = this.state.obj[target].getEmbed()
      ? this.state.obj[target].getEmbed().a
      : this.state.obj[target].getMedia();

    if (targetVid.tagName == POST_TYPE.VIDEO) {
      // waiting for all the metadatas load to determine height x width
      this.eventcheck("loadedmetadata").then(e => {
        this.mathematics(targetVid);
        this.videoEl().style.display = "block";
      });
    } else {
      this.mathematics(targetVid);
    }
  }
};

export default plyr;
