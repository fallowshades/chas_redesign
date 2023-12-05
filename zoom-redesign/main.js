import { linkMapping } from './linksMapping'
import { featureLinks } from './utils/links'
import { getElementById } from './utils/queryElementbyId'

const links = featureLinks
const featureElement = getElementById('links')
linkMapping(featureLinks, featureElement)
