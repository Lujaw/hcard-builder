import Hcard from './Hcard';
import { fetchCard } from './api';

const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: Home,
  // },
  {
    path: '/card/:id',
    component: Hcard,
    fetchInitialData: (path = '') => fetchCard(path.split('/').pop())
  }
]

export default routes;