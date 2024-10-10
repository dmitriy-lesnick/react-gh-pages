import Catalog from "../pages/Catalog"
import Home from "../pages/Home"
import ProductPage from "../pages/ProductPage"
import Text from "../pages/Text"
import ToDo from "../pages/ToDo"

let routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/toDo',
        element: <ToDo />
    },
    {
        path: '/catalog',
        element: <Catalog />
    },
    {
        path: '/text',
        element: <Text />
    },
    {
        path: '/catalog/:id',
        element: <ProductPage />
    }
]

export default routes