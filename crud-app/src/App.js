import './App.css';
import React , { useState } from 'react';
import BooksTable from './components/booksTable';
import AddBookForm from './components/addBookForm';
import EditBookForm from './components/editBookForm';

function App() {
  const booksData = [
    {id: 1 , name: 'Doraemon' , category: 'Comic' , price: '10'},
    {id: 2 , name: 'Giao duc cong dan' , category: 'SGK' , price: '9'},
    {id: 3 , name: 'Playboy' , category: 'magazine' , price: '10'},
  ]
  const [books , setBooks] = useState(booksData);
  const [display , setDisplay] = useState(false);
  const [editing , setEditing] = useState(false);
  const initialFormState = {id: null , name: '' , category:'' , price: ''};
  const [currentBook , setCurrentBook] = useState(initialFormState);
  const [search , setSearch] = useState(null);

  const toggleEdit = book => {
    setEditing(true);
    setDisplay(true);
    setCurrentBook({id: book.id , name: book.name , category: book.category , price: book.price});
  }
  const addBook = book => {
    book.id = books.length + 1;
    setBooks([...books , book]);
  }
  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  }
  const updateBook = (id , updatedBook) => {
    setEditing(false);
    setBooks(books.map(book => (
      book.id === id ? updatedBook : book)
    ))
  }

  const searchSpace = e => {
    let keyword = e.target.value;
    setSearch(keyword);
    console.log(keyword)
  }
  return (
    <div className="container">
      <h1 style={{textAlign: 'center'}}>CRUD App with <span>ReactJS</span></h1>
      <div className="manage-area">
        <div className="add-area">
          <h2>{editing ? 'Edit Book' : 'Add Book'}</h2>
          {
             editing ? <EditBookForm
             display = {display}
             currentBook={currentBook}
             updateBook={updateBook}
             setEditing={setEditing}
             setDisplay={setDisplay} /> 
             : 
             <AddBookForm 
             display = {display}
             addBook={addBook} />
          }
        </div>
        <div className='view-area'>
          <h2>View Books</h2>
          <BooksTable
           search = {search}
           searchSpace = {searchSpace}
           books={books} 
           deleteBook={deleteBook} 
           toggleEdit={toggleEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
