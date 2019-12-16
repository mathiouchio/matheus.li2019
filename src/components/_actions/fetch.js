export const sanitize = str =>
  encodeURIComponent(str).replace(
    /[!'()*]/g,
    c => `%${c.charCodeAt(0).toString(16)}`
  );

export const get = url => fetch(url).then(response => response.json());
export const post = ({ url, inputs }) =>
  fetch(url, {
    body: JSON.stringify(inputs),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "text/plain"
    },
    method: "POST",
    mode: "no-cors"
  }).then(res => res.text());
