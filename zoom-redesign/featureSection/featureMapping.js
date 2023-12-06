const featureMapping = (links, container, featureButton) => {
  // Clear existing content in the container
  container.innerHTML = ''
  // Create buttons based on the 'text' property
  /*
  links.forEach((link) => {
    const image = document.createElement('img')
    image.alt = link.text
    image.src = link.url
    image.className.add('svgUrl')

    // Add any additional attributes or event listeners as needed
    // For example, you might want to add a click event listener

      */

  const ul = document.createElement('ul')
  ul.classList.add('grid', 'grid-cols-2', 'gap-4', 'list-none')

  ul.innerHTML = links

    .map((link) => {
      return `
        <li class="flex"> <img
          src="${link.icon}"
          alt="${link.text}"
          class="svgUrl"
        />
        <a href="https://explore.zoom.us/en/products/errorPageMohaha/" target="_blank">${link.text}</a>
       </li> `
    })
    .join('')

  container.appendChild(ul)

  console.log(featureButton[0])
  // Create and append a button after the unordered list
  const buttonDiv = document.createElement('div')
  buttonDiv.innerHTML = featureButton.map((button) => {
    return `
    <button class= '${button.style}'>${button.text}</button>
    `
  })

  container.appendChild(buttonDiv)
  // })
}

export default featureMapping
