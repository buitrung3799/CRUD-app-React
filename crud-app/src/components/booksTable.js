import React  from 'react';
import '../css/booksTable.css'
const BooksTable = props => {
    return(
        <>
        <input id='name' type='text' name='name' placeholder='Search...' />
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
                props.books.map((book) => (
                    <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.category}</td>
                    <td>{book.price}</td>
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