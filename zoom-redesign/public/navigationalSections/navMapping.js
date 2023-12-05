const buttonMapping = (links, container) => {
  container.innerHTML = ''

  const div = document.createElement('div')
  div.classList.add('flex', 'w-fit')
  div.innerHTML = links
    .map((link) => {
      return `<div class="${link.style} text-sm font-bold" ><button >${link.text}</button></div>`
    })
    .join('')

  container.appendChild(div)
}

const aLinkMapping = (links, container, toggle) => {
  container.innerHTML = ''
  const ul = document.createElement('ul')
  ul.classList.add(
    'list-none',
    'flex',
    'gap-x-5',
    'text-gray-500',
    'leading-6',
    'p-l-',
    'pl-5'
  )
  ul.innerHTML = links
    .map((link) => {
      if (link.id != 4) {
        return `
        <li class="group transition duration-300 ease-in-out transform hover:text-sky-700 hover:translate-x-1">
          <a class="text-sm">${link.text}
          <i class="hidden  group-hover:translate-x-1 ${link.displayedHover}"></i></a>
        </li>`
      }
      return `
        <li class="group transition duration-300 ease-in-out transform hover:text-sky-700 hover:translate-x-1">
          <a class="text-sm  group-hover:underline">${link.text}</a>
         
        </li>`
    })
    .join('')

  if (toggle) {
    ul.innerHTML = ' <i class="fas fa-bars"></i>'
  }

  container.appendChild(ul)
}

export { buttonMapping, aLinkMapping }
