export const headerMapping = (links, container) => {
  container.innerHTML = ''

  container.innerHTML = links
    .map((link) => {
      return `
         <img
          src="${link.icon}"
          alt="${link.text}"
          class="svgUrl"
        />
        `
    })
    .join('')
}
