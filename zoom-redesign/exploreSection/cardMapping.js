const cardMapping = (links, container) => {
  container.innerHTML = ''
  const div = document.createElement('div')

  div.classList.add('grid', 'grid-cols-2', 'gap-4', 'list-none')

  div.innerHTML = links

    .map((link) => {
      return `
        <div class="font-sans  flex group p-4 transition-shadow duration-300 hover:shadow-lg"> 
        ${link.icon}
        
        <h2 class="ml-4 text-lg font-semibold"> ${link.text}</h2>
       </div> `
    })
    .join('')

  container.appendChild(div)
}

export default cardMapping
