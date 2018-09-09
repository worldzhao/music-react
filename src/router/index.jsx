import getRoutes from './getRoutes'
import getLinks from './getLinks'
import routeInfo from './route'
import menuInfo from './menu'

const routes = [...menuInfo, ...routeInfo]

export const Routes = getRoutes(routes)

export const Links = getLinks(menuInfo)
