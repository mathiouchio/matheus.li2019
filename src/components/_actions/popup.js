import { route } from "./route";

export const popup = {
  el: null,
  init: () => {
    popup.el = document.createElement("div");
    popup.el.id = "popup";
    document.body.appendChild(popup.el);
  },
  // destroy: () => {
  //   if (popup.el.hasChildNodes()) {
  //     ReactDOM.unmountComponentAtNode(document.getElementById("popup"));
  //     delete document.body.dataset.static;
  //     route.go();
  //   }
  // },
  destroy: () => {
    delete document.body.dataset.static;
    route.go();
  }
};

export default popup;
