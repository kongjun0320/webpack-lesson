import './style.css'
import lisa from './lisa.jpeg'

function component() {
  const element = document.createElement('div')
  element.innerHTML = '累好啊'

  const p = document.createElement('p')
  p.innerHTML = '累好啊'
  p.classList.add('hello')
  element.appendChild(p)
  // const img = new Image()
  // img.src = lisa

  // element.appendChild(img)

  return element
}

document.body.appendChild(component())
