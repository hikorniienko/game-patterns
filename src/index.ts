function component (): HTMLElement {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'asdasd'
  return element
}

document.body.appendChild(component())
