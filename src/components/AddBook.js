import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "reactstrap"
import { setAddBook } from "../stores/actions/actionBook";
import "../views/AddBook.css"
import Book from "./Book";

const AddBook = () => {
    const open = useSelector((state) => state.book.open);
    const dispatch = useDispatch();

    const handleClickAddBook = () => {
        dispatch(setAddBook({
            title: '',
            author: '',
            describes: '',
            category: '',
            releaseDate: '',
            number: '',
            // img: '',
        }));
    }

    return (
        <>
            <Modal isOpen={open}>
                <Book />
            </Modal>
            <Button
                className="btn-add"
                color="primary"
                onClick={() => handleClickAddBook()}
            >
                ADD BOOK
            </Button>

        </>
    )
}

export default AddBook;