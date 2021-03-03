import '../css/editBook.css';
import React , {useState} from 'react';
const EditBookForm = props => {
    const [book , setBook] = useState(props.currentBook);
    const handleChange = e => {
        const {name , value} = e.target;
        setBook({...book , [name]: value});
    }
    return (
        <form className={props.display ? 'display' : ''} onSubmit={
            e => {props.updateBook(book.id , book)}}> 
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' value={book.name} onChange={handleChange} />
            <label htmlFor='category'>Category</label>
            <input id='category' type='text' name='category' value={book.category} onChange={handleChange} /> 
            <label htmlFor='price'>Price</label>
            <input id='price' type='text' name='price' value={book.price} onChange={handleChange} />
            <div className='btn-group'>
                <button>Edit Book</button>
                <button onClick={() => {props.setEditing(false) ; props.setDisplay(false)}}>Cancel</button>
            </div>
        </form>
    )
}
export default EditBookForm ;