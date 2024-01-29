import { AboutPage } from 'pages/AboutPage'
import { CatalogPage } from 'pages/CatalogPage'
import { ContactsPage } from 'pages/ContactsPage'
import { DeliveryPage } from 'pages/DeliveryPage'
import { MainPage } from 'pages/MainPage'
import { ShopsPage } from 'pages/ShopsPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  CATALOG = 'catalog',
  ABOUT_US = 'about',
  DELIVERY = 'delivery',
  SHOPS = 'shops',
  CONTACTS = 'contacts'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.ABOUT_US]: '/about',
  [AppRoutes.DELIVERY]: '/delivery',
  [AppRoutes.SHOPS]: '/shops',
  [AppRoutes.CONTACTS]: '/contacts'
}

export const routerConfig: RouteProps[] = [
  { path: RoutePaths[AppRoutes.MAIN], element: <MainPage /> },
  { path: RoutePaths[AppRoutes.CATALOG], element: <CatalogPage /> },
  { path: RoutePaths[AppRoutes.ABOUT_US], element: <AboutPage /> },
  { path: RoutePaths[AppRoutes.DELIVERY], element: <DeliveryPage /> },
  { path: RoutePaths[AppRoutes.SHOPS], element: <ShopsPage /> },
  { path: RoutePaths[AppRoutes.CONTACTS], element: <ContactsPage /> }
]
