import { ModalHeader, ModalBody, ModalFooter, Button, Form, Label, Input } from "reactstrap"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { addBook, updateBook, cancel } from "../stores/actions/actionBook";
import axios from "axios";
import { toast } from "react-toastify"


const Book = () => {
    const flag = useSelector((state) => state.book.flag);
    const listBooks = useSelector((state) => state.book.listBooks);
    const dispatch = useDispatch();
    const [book, setBook] = useState(listBooks);

    const setTitle = (e) => {
        setBook({ ...book, title: e.target.value })
    }
    const setAuthor = (e) => {
        setBook({ ...book, author: e.target.value })
    }
    const setDescribes = (e) => {
        setBook({ ...book, describes: e.target.value })
    }
    const setCategory = (e) => {
        setBook({ ...book, category: e.target.value })
    }
    const setReleaseDate = (e) => {
        setBook({ ...book, releaseDate: e.target.value })
    }
    const setNumber = (e) => {
        setBook({ ...book, number: e.target.value })
    }
    // const setImg = (e) => {
    //     setBook({ ...book, img: e.target.file })
    // }

    const addOrUpdateDataBook = () => {
        if (!(book.title) || !(book.author) || !(book.describes) || !(book.category) || !(book.releaseDate) || !(book.number)) {
            toast.warning("Nhập thiếu thông tin vui lòng nhập lại");
            return;
        }

        if (flag === 2) {
            axios.put('http://localhost:7000/api/updates-book', book);
            dispatch(updateBook());
        }
        else if (flag === 1) {
            axios.post('http://localhost:7000/api/create-new-book', book);
            dispatch(addBook());
        }
    }

    const handleClickCancel = () => {
        dispatch(cancel(
            {
                title: '',
                author: '',
                describes: '',
                category: '',
                releaseDate: '',
                number: '',
                // img: '',
            }
        ))
    }


    return (
        <>
            <ModalHeader>{
                flag === 1 ?
                    <>ADD BOOK</>
                    :
                    <>DETAIL</>
            }
            </ModalHeader>
            <ModalBody>
                <Form >
                    <Label >Title</Label>
                    <Input
                        value={book.title}
                        onChange={(e) => setTitle(e)}
                    />
                    <Label >Author</Label>
                    <Input
                        value={book.author}
                        onChange={(e) => setAuthor(e)}
                    />
                    <Label >Describes</Label>
                    <Input
                        type="textarea"
                        value={book.describes}
                        onChange={(e) => setDescribes(e)}
                    />
                    <Label >Category</Label>
                    <Input
                        type="select"
                        value={book.category}
                        onChange={(e) => setCategory(e)}
                    >
                        <option value="Hài">Hài</option>
                        <option value="Trinh Thám">Trinh Thám</option>
                        <option value="Kinh dị">Kinh dị</option>
                        <option value="Ngôn Tình">Ngôn Tình</option>
                        <option value="Tiểu Thuyết">Tiểu Thuyết</option>
                    </Input>
                    <Label >Release Date</Label>
                    <Input
                        type="date"
                        value={book.releaseDate}
                        onChange={(e) => setReleaseDate(e)}
                    />
                    <Label >Number</Label>
                    <Input
                        value={book.number}
                        onChange={(e) => setNumber(e)}
                    />
                    <Label >Img</Label>
                    <Input
                        id="exampleFile"
                        type="file"
                    // onChange={(e) => setImg(e)}
                    />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    className='btn-add-update'
                    color="success"
                    onClick={() => addOrUpdateDataBook()}
                >
                    {flag === 1 ?
                        <>ADD BOOK</>
                        :
                        <>UPDATE BOOK</>
                    }
                </Button>
                <Button
                    className='btn-cancel'
                    color="danger"
                    onClick={() => handleClickCancel()}
                >
                    Cancel
                </Button>
            </ModalFooter>

        </>
    )
}
export default Book;