function createElement (tag, props, ...children) {
  const el = document.createElement(tag)

  for (let name in props) {
    el.setAttribute(name, props[name])
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i]

    if (typeof child === 'string') {
      const textNode = document.createTextNode(child)
      el.appendChild(textNode)
    }
    else {
      // console.log(child)
      el.appendChild(child)
      // return createElement()
    }
  }

  return el
}

function render (app, root) {
  root.appendChild(app)
}

const app = <div>
  <div class="dash-box">
    <img src="https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1" />
  </div>

  <div class="solid-box">
    <img src="https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1" />
  </div>

  <div class="solid-box">
    <div class="dash-box">
      <img src="https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1" />
    </div>
    <img src="https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1" />
  </div>
</div>

render(app, document.getElementById('root'))