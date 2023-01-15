import "./css/style.css"
import "./css/personal.scss"
import "./less/main.less"
import mht from './img/mht.jpg'
import "./font/iconfont.css"

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






  return element;;;
}
function component3() {
  const element = document.createElement('div')
  element.style.width = 200+ 'px';
  element.style.height = 200 + "px";
  element.style.display = 'inline-block';
  element.className = 'bg-image';
  element.style.backgroundColor = 'red';
  return element;
}
function component4() {
  const element = document.createElement('img')
  element.src = mht
  return element;
}
function component5() {
  const element = document.createElement('i')
  element.style.width = 20+ 'px';
  element.style.height = 20 + "px";
  element.className = "iconfont icon-Dyanjing"
  return element;
}
function component6() {
  const element = document.createElement('div')
  element.innerHTML = ["hello", "moto"].join(" ")
  // element.className = "block"
  element.classList.add(...["block", "content"])

  return element;
}

document.body.appendChild(component())
document.body.appendChild(component2())
document.body.appendChild(component3())
document.body.appendChild(component4())
document.body.appendChild(component5())

