const linkMapping = (links, container) => {
  // Clear existing content in the container
  container.innerHTML = ''

  // Create buttons based on the 'text' property
  links.forEach((link) => {
    const button = document.createElement('button')
    button.textContent = link.text

    // Add any additional attributes or event listeners as needed
    // For example, you might want to add a click event listener

    container.appendChild(button)
  })
}

export default linkMapping
