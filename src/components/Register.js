import axios from 'axios';
import { useState } from 'react';
import { Button, Input, Label, Form } from 'reactstrap';
import "../views/DangNhap.css"
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"


const Register = () => {
    const [userName, setUserName] = useState("");

    const hanldeClickRegister = async () => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!userName.email || !userName.password || !userName.name) {
            toast.warning("Nhập thiếu thông tin đăng kí vui lòng đăng kí lại!");
            return;
        }
        if ((userName.email).match(pattern)) {
        } else {
            toast.warning("Email sai định dạng!")
            return;
        }
        await axios.post('http://localhost:7000/apiUser/register', userName).then((response) => {
            if (response.data.message) {
                toast.warning("Tài khoản đã tồn tại!");
                return;
            }
        });
    }
    return (
        <>
            <Form className="form">
                <Label >Name</Label>
                <Input
                    type='text'
                    onChange={(e) => setUserName({ ...userName, name: e.target.value })}
                />
                <Label >Email</Label>
                <Input
                    type='email'
                    onChange={(e) => setUserName({ ...userName, email: e.target.value })}
                />
                <Label >Password</Label>
                <Input
                    type='password'
                    onChange={(e) => setUserName({ ...userName, password: e.target.value })}
                />
                <Button
                    color="success"
                    onClick={() => hanldeClickRegister()}
                >
                    <Link to="/"
                        className='nav-link'>
                        Register
                    </Link>
                </Button>
            </Form>
        </>
    );
}

export default Register;