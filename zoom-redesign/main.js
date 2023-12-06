import { linkMapping, featureMapping, imageMapping } from './featureSection'
import { buttonMapping, aLinkMapping } from './navigationalSections/navMapping'
import heroMapping from './navigationalSections/heroMapping'

import { callToExploreMapping, cardMapping } from './exploreSection'
import {
  featureLinks,
  zoomLinks,
  navButtons,
  navLinks,
  buttonsBlueThenWhite,
  featureButtonData,
  cardData,
} from './utils/links'
import { getElementById } from './utils/queryElementbyId'

let links = featureLinks
let featureElement = getElementById('linksMapping')
linkMapping(links, featureElement)

links = zoomLinks
featureElement = getElementById('featureContainer')
featureMapping(links, featureElement, featureButtonData)

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

///////////////hero section

const heroButtonElement = getElementById('reverse-button-order')
const heroButtonLinks = buttonsBlueThenWhite

buttonMapping(heroButtonLinks, heroButtonElement)

const learnMore = getElementById('learn-more')
learnMore.innerHTML = heroMapping()

////////////////////to the feature container
featureElement = getElementById('imageContainer')
imageMapping()

/////7

const callToExplore = getElementById('callToExplore')
callToExploreMapping(callToExplore)

const cardCategories = getElementById('cardCategories')
links = cardData
cardMapping(links, cardCategories)
