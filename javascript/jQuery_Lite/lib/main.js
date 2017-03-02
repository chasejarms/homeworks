const DomNodeCollection = require("./dom_node_collection.js");

window.$l = function(selector) {
  if (selector instanceof HTMLElement) {
    return new DomNodeCollection([selector]);
  } else {
    return nodeRoute(selector);
  }
};

function nodeRoute(selector) {
  let nodeList = document.querySelectorAll(selector);
  let arr = Array.from(nodeList);
  return new DomNodeCollection(arr);
}
