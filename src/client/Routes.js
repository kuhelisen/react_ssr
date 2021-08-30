import App from './App'
import HomePage from './pages/HomePage'
import SportsListPage from './pages/SportsListPage'
import Badminton from './pages/Badminton'
import NotFoundPage from './pages/NotFoundPage'

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...HomePage,
                path: '/ncr',
            },
            {
                ...SportsListPage,
                path: '/sports',
            },
            {
                ...Badminton,
                path: '/badminton'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]
