import { useContext } from "react";
import BookContext from "../BookContextProvider";

const useBookContext = () => {
  return useContext(BookContext);
};

export { useBookContext };
