
import { useContext, useEffect } from "react";
import './App.css';
import BookContext from "./BookContextProvider";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  
  const {
    fetchBooks
  } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);


  return (
    <div className="app container">
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title">
            Reading List
          </p>
        </div>
      </section>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
