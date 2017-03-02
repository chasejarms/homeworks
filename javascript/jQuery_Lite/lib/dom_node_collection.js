class DomNodeCollection {
  constructor(arrayOfElements) {
    this.arrayOfElements = arrayOfElements;
  }

  html(string = undefined) {
    return string !== undefined ? this._setInner(string) : this._getInner(string);
  }

  empty() {
    this.html("");
  }

  _setInner(string) {
    this.arrayOfElements.forEach(function(el) {
      el.innerHTML = string;
    });
    return string;
  }

  _getInner() {
    return this.arrayOfElements[0].innerHTML;
  }
}

module.exports = DomNodeCollection;

/*

Take a look here. This method should accept either a jQuery-lite wrapped collection, an HTML element, or a string. Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection. Don't worry about converting strings into HTML elements; just pass them straight through to the elements' innerHTML.
other methods

I will leave it up to you to figure out ways to implement attr, addClass, and removeClass. All the information for how to change nodes is available in this resource.

*/
