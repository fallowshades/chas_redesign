const featureMapping = (links, container, featureButton) => {
  // Clear existing content in the container
  container.innerHTML = ''
  // Create buttons based on the 'text' property

  const div = document.createElement('div')
  div.innerHTML = `<h2 class="text-2xl font-bold">Unified communication and collaboration platform</h2><hr>
<p class="text-base">Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.</p>
`
  container.appendChild(div)

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
