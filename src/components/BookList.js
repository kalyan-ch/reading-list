
import { useBookContext } from "../hooks/use-book-context";
import BookCard from "./BookCard";


const BookList = () => {
  const {
    books,
  } = useBookContext();

  const renderedItems = () => books.map(book => {
  return <BookCard 
      key={book.id} 
      book={book} />
  });

  return (
    <div className="book-list">
      { renderedItems() }
    </div>
  );
}

export default BookList;
