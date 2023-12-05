const featureMapping = (links, container) => {
  // Clear existing content in the container
  container.innerHTML = ''

  // Create buttons based on the 'text' property
  links.forEach((link) => {
    /*
    const image = document.createElement('img')
    image.alt = link.text
    image.src = './uhr-logo-rgb-svart-sv'
    image.className = 'svgUrl'
*/
    // Add any additional attributes or event listeners as needed
    // For example, you might want to add a click event listener
    //container.appendChild(image)
    /** */
    /*
    container.innerHTML = links
      .map((link) => {
        return `
         <img
          src="${link.url}"
          alt="${link.text}
          className="svgUrl"
        />
        `
      })
      .join('')
      */
  })
}

export default featureMapping
