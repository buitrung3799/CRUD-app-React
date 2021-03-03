/* eslint-disable array-callback-return */
import React  from 'react';
import '../css/booksTable.css'
const BooksTable = props => {
    const items = props.books.filter((book) => {
        if(props.search == null)
        return book
        else if(book.name.toLowerCase().includes(props.search.toLowerCase()) || book.category.toLowerCase().includes(props.search.toLowerCase())) {
            return book 
        }
    })
    return(
        <>
        <input id='search-bar' type='text' placeholder='Search...' onChange={e => props.searchSpace(e)} />
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Book Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.books.length > 0 ? (
                items.map((book) => (
                    <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.category}</td>
                    <td>{book.price}.000 VND</td>
                    <td style={{width: '100%'}}>
                        <button className='button edit' onClick={() => props.toggleEdit(book)}>Edit</button>
                        <button className='button delete' onClick={() => props.deleteBook(book.id)}>Delete</button>
                    </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td>No users</td>  
                </tr>
            )}
        </tbody>
    </table>
    </>
    )
    
}
export default BooksTable;