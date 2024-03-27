import { useState } from "react";

const BookEdit = ({ setShowEdit, onBookEdit, book}) => {

  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookEdit(book.id, title);
    setShowEdit(false);
  };

  return (
    <form onSubmit={handleSubmit}> 
      <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
