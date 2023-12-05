# chas_redesign

## set up tailwind

- remove boilerplate css

## pick sections

- https://zoom.us/
- section2 flexible solutions
- section 6 read our blog

### import links

create utils/links

### create links

```js
export const featureLinks = [
  { id: 1, text: 'zoom one' },
  { id: 2, text: 'spaces' },
  { id: 3, text: 'Events' },
  { id: 4, text: 'contact center' },
  { id: 5, text: 'Developers' },
]
```

### setup page structure

index.html

```html
    <section class="features">
        <div class="align-element py-20">
          <aside id="links" class="flex flex-col">
            is dynamically rendered in linksMapping
          </aside>
          <div class="scrollableContainer">
            <div class="">
              <div id="imageContainer"></div>
              <div id="featureContainer">
                is dynamically rendered in featureMapping
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog"></section>
    </div>
```

### dynamically rendering

#### data and container dependencies

Utils/links.jsx

```js
export const featureLinks = [
  { id: 1, text: 'zoom one' },
  { id: 2, text: 'spaces' },
  { id: 3, text: 'Events' },
  { id: 4, text: 'contact center' },
  { id: 5, text: 'Developers' },
]
```

Utils/queryElementnyId.js

```js
const getElementById = (selection) => {
  const element = document.querySelector(`#${selection}`)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

export { getElementById }
```

#### call responsiple page to render dynamically

create linksMapping

```js
export const linkMapping = (links, container) => {}

export default linkMapping
```

call rendering in main.js

```js
import { linkMapping } from './linksMapping'
import { featureLinks } from './utils/links'
import { getElementById } from './utils/queryElementbyId'

const links = featureLinks
const featureElement = getElementById('links')
linkMapping(featureLinks, featureElement)
```

#### render page dynamicaly

linksMapping.js

```js
export const linkMapping = (links, container) => {
  // Clear existing content in the container
  container.innerHTML = ''
  console.log(links)
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
```

### dynamically render feature pages

#### refracture and put section in feature folder

refracture linksMapping and put it inside the FeatureSection

create featureMapping.js

```js
const featureMapping = (links, container) => {}
export default featureMapping
```

#### export the dynamically rendered components in an index

featureSection/index.js

```js
export { default as linkMapping } from './linksMapping'
export { default as featureMapping } from './featureMapping'
```

main.js

```js
links = zoomLinks
featureElement = getElementById('featureContainer')
featureMapping(links, featureElement)
```

#### map icon and fix typo in links.jsx

featureMapping.js

```js
const featureMapping = (links, container) => {
  // Clear existing content in the container
  container.innerHTML = ''

  container.innerHTML = links
    .map((link) => {
      return `
         <img
          src="${link.icon}"
          alt="${link.text}
          className="svgUrl"
        />
        `
    })
    .join('')
}

export default featureMapping
```

## about time to nav

### add navbar links

#### set styles

utils\links

```js
export const navButtons = [
  {
    id: 1,
    text: 'contact Sales',
    url: 'https://www.zoom.com/en/contact/contact-sales/',
    style:
      'w-10 h-10 bg-white border border-blue-500 rounded-full text-blue-500',
  },
  {
    id: 2,
    text: 'Sign up free',
    url: 'https://zoom.us/signup#/signup',
    style: 'w-10 h-10 bg-blue-500 border border-white rounded-full text-white',
  },
]
export const navLinks = [
  { id: 1, text: 'Products' },
  { id: 2, text: 'Solutions' },
  ,
  { id: 3, text: 'Resources' },
  ,
  { id: 4, text: 'Plans and Pricing' },
]
```

#### nav mapping

navMapping.js

```js
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
```

```js
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
      return `
        <li class="group transition duration-300 ease-in-out transform hover:text-sky-700 hover:translate-x-1">
          <a>${link.text}</a>
          <i class=" group-hover:inline-block fas fa-arrow-right ml-2"></i>
        </li>`
    })
    .join('')
  if (toggle) {
    ul.innerHTML = ' <i class="fas fa-bars"></i>'
  }
  container.appendChild(ul)
}
export { buttonMapping, aLinkMapping }
```

#### navigation html

index.html

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>
```

```html
<body class="bg-midnight text-tahiti">
  <nav
    id="nav"
    class="flex justify-between flex-row items-center p-4 bg-midnight text-tahiti"
  >
    <div class="flex items-start items-center md:items-start">
      <img
        alt="Zoom Logo"
        height="26"
        src="https://images4.welcomesoftware.com/assets/Zoom+Logo/Zz01ZGU4MDMzZWJmNDcxMWVkOTI4NGEyNDU1OWRiZTc5Zg==?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOlsiNWRlODAzM2ViZjQ3MTFlZDkyODRhMjQ1NTlkYmU3OWYiXSwiZXhwIjoxNjgxMzM0MTEwfQ.3_IFoXtmS8ExOGbL0F1oGPu8z6lgijgDWFf82zrDFzk"
        width="114"
      />
      <div id="toggle" class="hidden md:block">
        is dynamically rendered in navMapping
      </div>
    </div>
    <div>
      <div id="navButtons" class="hidden md:block">
        is dynamically rendered in navMapping
      </div>
      <div id="toggleLarge" class="md:hidden">
        is dynamically rendered in navMapping
      </div>
    </div>
  </nav>
  <!--|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
</body>
```

#### main

```js
import {
  buttonMapping,
  aLinkMapping,
} from './public/navigationalSections/navMapping'
import { featureLinks, zoomLinks, navButtons, navLinks } from './utils/links'
```

```js
/*
links = {
  headerOnSmall: headerSmallDisplayed,
  headerInToggleInfo: headerSmallToggleInfo,
  headerInToggleAuth: headerSmallToggleAuth,
}
let navElement = getElementById('header')
headerMapping(links, navElement)
*/
links = {
  navButtons: navButtons,
  navLinks: navLinks,
}
let navElement = getElementById('toggle')
aLinkMapping(links.navLinks, navElement)
navElement = getElementById('navButtons')
buttonMapping(links.navButtons, navElement)
navElement = getElementById('toggleLarge')
aLinkMapping(links.navLinks, navElement, 'isLargeScreen' === 'isLargeScreen')
```

## about time to hero

###
