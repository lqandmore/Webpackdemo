import "./css/style.css"

function component() {
  const element = document.createElement('div')
  element.innerHTML = ["hello", "webpack"].join(" ")
  element.className = "title"
  return element;
}

document.body.appendChild(component())