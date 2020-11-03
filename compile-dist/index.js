"use strict";

class Component {
  constructor(props) {
    this.props = props
  }
}

function createElement(tag, props) {
  let el;

  if (typeof tag === 'string') {
    el = document.createElement(tag);
  } else if (typeof tag === 'function') {
    const elInstance = new tag();
    el = elInstance.render();
  }

  for (let name in props) {
    el.setAttribute(name, props[name]);
  }

  for (let i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i++) {
    const child = i + 2 < 2 || arguments.length <= i + 2 ? undefined : arguments[i + 2];

    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      el.appendChild(textNode);
    } else {
      el.appendChild(child);
    }
  }

  return el;
}

function render(app, root) {
  root.appendChild(app);
}

class Hello extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return createElement("div", null, " Hello ", this.props.name);
  }

}

const app = createElement("div", null, createElement("h1", null, "jsx-render-test"), createElement(Hello, {
  name: "yuanzhaokang"
}), createElement("div", {
  class: "dash-box"
}, createElement("img", {
  src: "https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1"
})), createElement("div", {
  class: "solid-box"
}, createElement("img", {
  src: "https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1"
})), createElement("div", {
  class: "solid-box"
}, createElement("div", {
  class: "dash-box"
}, createElement("img", {
  src: "https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1"
})), createElement("img", {
  src: "https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1"
})));
render(app, document.getElementById('root'));