export const WPLOCAL = {
  origin: "https://matheus.li",
  apiURL: "https://matheus.li/wp-json/wp/v2/",
  templateURL: "https://matheus.li/blog/wp-content/themes/matheus/"
};

export const generatePopupURL = target => {
  return `${WPLOCAL.apiURL}media?parent=${target}`;
};

export const REQUEST = {
  POSTS: `${WPLOCAL.apiURL}posts?per_page=100`,
  PORTFOLIOS: `${WPLOCAL.apiURL}portfolio`,
  POST: slug => `${WPLOCAL.apiURL}posts?slug=${slug}`,
  PORTFOLIO: slug => `${WPLOCAL.apiURL}portfolio?slug=${slug}`,
  POPUP: id => `${WPLOCAL.apiURL}media?parent=${id}`
};

export const CONTROL = {
  PREV: "prev",
  NEXT: "next",
  MUTE: "mute",
  FULLSCREEN: "fullscreen",
  CLOSE: "close"
};

export const POST_TYPE = {
  VIDEO: "video",
  STANDARD: "standard",
  GALLERY: "gallery"
};
