import { Table, Button } from 'reactstrap'
import { useState, useEffect } from "react";
import axios from "axios";
import "../views/ListBook.css"
import { detailBook } from '../stores/actions/actionBook';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ListBook = () => {
    const [listBook, setListBook] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDataListBook = async () => {
            const res = await axios.get('http://localhost:7000/api/books');
            let data = res && res.data ? res.data : [];
            setListBook(data.data);
        }
        fetchDataListBook();
    }, [listBook])

    const handleClickDetaiBook = (book) => {
        const defaultDate = new Date(book.releaseDate);
        const dateString = defaultDate.toISOString().substr(0, 10);
        book.releaseDate = dateString;
        dispatch(detailBook(book));
    }
    const handleClickDeleteBook = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa")) {
            async function deleteData() {
                await axios.delete("http://localhost:7000/api/delete-book/" + id);
            }
            deleteData();
            toast.error("Đã xóa sách thành công!");
        }


    }
    return (
        <>
            <div className="ListBook">
                <span className="text">Bảng sách</span>
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listBook && listBook.length > 0 && listBook.map(item => (
                        <>
                            <tr>
                                <th scope="row" key={item.id}>{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.category}</td>
                                <td>
                                    <Button
                                        color='primary'
                                        onClick={() => handleClickDetaiBook(item)}
                                    >Detail</Button>
                                    <Button
                                        color='danger'
                                        onClick={() => handleClickDeleteBook(item.id)}
                                    >Delete</Button>
                                </td>
                            </tr>
                        </>
                    ))
                    }
                </tbody>
            </Table>

        </>
    )
}
export default ListBook;