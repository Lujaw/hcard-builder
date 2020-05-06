import Hcard from "./Hcard";
import HcardList from "./HcardList";
import { fetchCardById, fetchCards } from "./api";

const routes = [
  {
    path: "/card/:id",
    component: Hcard,
    fetchInitialData: (path = "") => fetchCardById(path.split("/").pop())
  },
  {
    path: "/cards",
    component: HcardList,
    fetchInitialData: () => fetchCards()
  },
  {
    path: ["/card", "/card/new"],
    component: Hcard,
    fetchInitialData: () => Promise.resolve({})
  }

];

export default routes;
