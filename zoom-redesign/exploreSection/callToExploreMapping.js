const callToExploreMapping = (container) => {
  container.innerHTML = ''

  console.log('hello')
  const div = document.createElement('div')
  div.classList.add('flex', 'flex-col', 'w-fit', 'gap-y-5')

  div.innerHTML = `
    <h1 class="font-sans text-5xl font-semibold">Powering organizations across industries and geographies</h1>
    <p class="text-gray-700 font-sans">Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.</p>
    <div>
    <button class= 'font-sans w-fit w-31 h-10 p-2 bg-blue-600 border border-white rounded-full text-white hover:bg-blue-500',
>Explore Industry Solutions</button></div>
    `
  container.appendChild(div)
}
export default callToExploreMapping
