import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/RouteConfig'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Navigation_Paths = [
    { path: RoutePaths[AppRoutes.MAIN], text: 'Главная' },
    { path: RoutePaths[AppRoutes.CATALOG], text: 'Каталог' },
    { path: RoutePaths[AppRoutes.ABOUT_US], text: 'О нас' },
    { path: RoutePaths[AppRoutes.DELIVERY], text: 'О доставке' },
    { path: RoutePaths[AppRoutes.SHOPS], text: 'Магазины' },
    { path: RoutePaths[AppRoutes.CONTACTS], text: 'Контакты' },
]
