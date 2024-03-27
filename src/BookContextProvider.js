import axios from "axios";
import { createContext, useCallback, useState } from "react";

const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const serverURL = "http://localhost:3001/books";

  const deleteBookById = async (bookId) => {
    await axios.delete(serverURL+`/${bookId}`);
    const newBooks = books.filter(book => {
      return book.id !== bookId;
    });

    setBooks(newBooks);
  };

  const editBookById = async (id, newTitle) => {
    const resp = await axios.put(serverURL+`/${id}`, {
      title: newTitle
    });

    const newBooks = books.map(book => {
      if(book.id === id) {
        return {...book, ...resp.data};
      }

      return book;
    })

    setBooks(newBooks);
  };

  const createBook = async (title) => {
    const resp = await axios.post(serverURL, {
      title
    });

    setBooks([...books, resp.data]);
  };

  const fetchBooks = useCallback(async () => {
    const resp = await axios.get(serverURL);
    setBooks(resp.data);
  }, []);

  const booksObj = {
    books,
    setBooks,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
  };

  return (
    <BookContext.Provider value={booksObj} >
      { children }
    </BookContext.Provider>
  );
};

export { BookContextProvider };
export default BookContext;