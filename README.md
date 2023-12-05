# chas_redesign

## set up tailwind

- remove boilerplate css

## pick sections

- https://zoom.us/
- section2 flexible solutions
- section 6 read our blog

## import links

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

#### didnt succeed to map img

featureMapping.js

```js
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
```
