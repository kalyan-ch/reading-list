import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useBookContext } from "../hooks/use-book-context";
import BookEdit from "./BookEdit";


const BookCard = ({ book }) => {

  const {
    editBookById,
    deleteBookById
  } =useBookContext();
  const [showEdit, setShowEdit] = useState(false);
  let content = <span>{ book.title }</span> ;

  if(showEdit) {
    content = <BookEdit setShowEdit={setShowEdit} onBookEdit={editBookById} book={book} />;
  }

  return (
    <div className="card book-card">
      <header className="card-header">
        <div className="card-header-title">{ content }</div>
        <button className="card-header-icon" onClick={() => setShowEdit(!showEdit)}>
          <span className="icon is-small">
            <FontAwesomeIcon icon={faPencil} />
          </span>
        </button>
        <button className="card-header-icon" onClick={() => deleteBookById(book.id)}>
          <span className="icon is-small">
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </button>
      </header>

      <div className="card-image">
        <figure className="image is-4by3">
          <img src={`https://picsum.photos/seed/${ book.id }/200/200`} alt="Picsum" />
        </figure>
      </div>

    </div>
  );
}

export default BookCard;