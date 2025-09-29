import React, { useState } from 'react';

function BookManager() {
  const [books] = useState([
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988 }
   
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearch = (e) => setSearchTerm(e.target.value);

  
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '15px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      {/* 📚 Display Books */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <li
              key={index}
              style={{
                background: '#fff',
                marginBottom: '10px',
                padding: '12px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <strong>{book.title}</strong> <br />
              Author: {book.author} <br />
              Year: {book.year}
            </li>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
}

export default BookManager;
