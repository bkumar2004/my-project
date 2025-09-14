import React, { useState } from 'react';

function BookManager() {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title.trim() && newBook.author.trim()) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '' });
    }
  };

  const handleRemoveBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <form onSubmit={handleAddBook} style={{ marginBottom: '20px' }}>
        <input
          name="title"
          placeholder="New book title"
          value={newBook.title}
          onChange={handleInputChange}
          style={{ width: '100%', marginBottom: '5px' }}
        />
        <input
          name="author"
          placeholder="New book author"
          value={newBook.author}
          onChange={handleInputChange}
          style={{ width: '100%', marginBottom: '5px' }}
        />
        <button type="submit">Add Book</button>
      </form>

      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>
            "{book.title}" by {book.author}
            <button onClick={() => handleRemoveBook(index)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookManager;