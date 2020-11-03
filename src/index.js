/**
 * 类组件基类
 */
class Component {
  constructor(props) {
    this.props = props
  }
}

function createElement (tag, props, ...children) {
  let el

  if (typeof tag === 'string') { // html tag
    el = document.createElement(tag)

    for (let name in props) {
      el.setAttribute(name, props[name])
    }
  }
  else if (typeof tag === 'function') { // 类组件
    const elInstance = new tag(props)
    el = elInstance.render()
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i]

    if (typeof child === 'string') { // 文本节点
      const textNode = document.createTextNode(child)
      el.appendChild(textNode)
    }
    else {
      el.appendChild(child)
    }
  }

  return el
}

function render (app, root) {
  root.appendChild(app)
}

class Hello extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return <div> Hello {this.props.name}: {this.props.sex}</div>
  }
}

const app = <div>
  <h1>jsx-render-test</h1>
  <Hello name="Tom" sex="male" />
  <div class="dash-box">
    <img src="https://maponline0.bdimg.com/tile/?qt=vtile&x=1584&y=588&z=13&styles=pl&udt=20201022&scaler=1&showtext=1" />
  </div>

  <div class="solid-box">
    <Hello name="Mary" sex="female" />
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