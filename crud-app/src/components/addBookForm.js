import React , {useState} from 'react';
import '../css/addBooks.css';

const AddBookForm = props => {
    const initialFormState = {id: '' , name: '' , category: '' , price: ''}
    const [book , setBook] = useState(initialFormState);

    const handleChange = e => {
        const {name , value} = e.target;
        setBook({
            ...book , [name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        if(!book.name || !book.category || !book.price) return 
        props.addBook(book);
        setBook(initialFormState);
        
    }
    return(
        <form className={!props.display ? 'display' : ''} onSubmit={onSubmit}> 
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' value={book.name} onChange={handleChange} />
            <label htmlFor='category'>Category</label>
            <input id='category' type='text' name='category' value={book.category} onChange={handleChange} />
            <label htmlFor='price'>Price</label>
            <input id='price' type='text' name='price' value={book.price} onChange={handleChange} />
            <button>Add new book</button>
        </form>
    )
}
export default AddBookForm;