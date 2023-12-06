const linkMapping = (links, container) => {
  // Clear existing content in the container
  container.innerHTML = ''

  const listOfButtons = document.createElement('div')
  listOfButtons.classList.add(
    'flex',
    'flex-row',
    'md:flex-col',
    'w-fit',
    'gap-y-5'
  )

  container.innerHTML = ''

  listOfButtons.innerHTML = links
    .map((link) => {
      return `
         <div class="text-white semantic-List-class ${link.style} ">
         <button onclick="handleButtonClick(this)">
  
${link.text}
          </button>
        </div>
        `
    })
    .join('')

  container.appendChild(listOfButtons)
}

export default linkMapping
