import { linkMapping, featureMapping } from './public/featureSection'
import { featureLinks, zoomLinks } from './utils/links'
import { getElementById } from './utils/queryElementbyId'

let links = featureLinks
let featureElement = getElementById('links')
linkMapping(links, featureElement)

links = zoomLinks
featureElement = getElementById('featureContainer')
featureMapping(links, featureElement)
