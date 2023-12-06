const callToExploreMapping = (container) => {
  container.innerHTML = ''

  console.log('hello')
  const div = document.createElement('div')
  div.classList.add('flex', 'flex-col', 'w-fit', 'gap-y-5')

  div.innerHTML = `
    <h1 class="text-5xl"">Powering organizations across industries and geographies</h1>
    <p>Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.</p>
    <div><button class=      'w-fit w-30 h-9 p-2 bg-blue-500 border border-white rounded-full text-white hover:bg-blue-600',
>Explore Industry Solutions</button></div>
    `
  container.appendChild(div)
}
export default callToExploreMapping
