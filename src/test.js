import "./css/style.css"
import "./css/personal.scss"
import "./less/main.less"

function component() {
  const element = document.createElement('div')
  element.innerHTML = ["hello", "webpack"].join(" ")
  element.className = "title"
  return element;
}

function component2() {
  const element = document.createElement('div')
  element.innerHTML = ["hello", "moto"].join(" ")
  // element.className = "block"
  element.classList.add(...["block", "content"])

  return element;
}
function component3() {
  const element = document.createElement('div')
  element.innerHTML = ["hello", "moto"].join(" ")
  // element.className = "block"
  element.classList.add(...["block", "content"])

  return element;
}
function component4() {
  const element = document.createElement('div')
  element.innerHTML = ["hello", "moto"].join(" ")
  // element.className = "block"
  element.classList.add(...["block", "content"])

  return element;
}

document.body.appendChild(component())
document.body.appendChild(component2())
