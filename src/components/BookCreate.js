import { useState } from "react";
import { useBookContext } from "../hooks/use-book-context";

const BookCreate = () => {

  const [bookTitle, setBookTitle] = useState('');
  const { createBook } = useBookContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(bookTitle);
    setBookTitle('');
  };

  return (
    <div className="field book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <input value={bookTitle} placeholder="Enter book title"
          className="input" onChange={(e) => setBookTitle(e.target.value)} />
      </form>
    </div>
  );
}

export default BookCreate;
