import Hcard from "./Hcard";
import HcardList from "./HcardList";
import { fetchCardById, fetchCards } from "./api";
import NotFound from "./NotFound";

const routes = [
  {
    path: "/cards",
    component: HcardList,
    fetchInitialData: () => fetchCards()
  },
  {
    path: "/card/:id",
    component: Hcard,
    fetchInitialData: (path = "") => fetchCardById(path.split("/").pop())
  },
  {
    path: ["/card", "/"],
    component: Hcard,
    exact: true,
    fetchInitialData: () => Promise.resolve({})
  },
  {
    path: ["*"],
    component: NotFound,
    fetchInitialData: () => Promise.resolve({})
  }
];

export default routes;
