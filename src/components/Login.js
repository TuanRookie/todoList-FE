import React from "react";
import { useState } from 'react';
import { Button, Input, Label, Form } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
    const [userName, setUserName] = useState("");
    const history = useNavigate();

    const hanldeClickLogin = () => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (userName.email === '' || !userName.password === '') {
            toast.warning("Nhập thiếu thông tin vui lòng nhập lại");
            return;
        }
        if (!(userName.email).match(pattern)) {
            toast.warning("Email sai định dạng!");
            return;
        }

        axios.post('http://localhost:7000/apiUser/login', userName)
            .then((response) => {
                if (response.data.message) {
                    toast.warning("Sai tài khoản hoặc mật khẩu!");
                } else {
                    history("/home");
                    toast.success("Đăng nhập thành công!")
                }

            })

    }
    return (
        <>
            <Form className="form">
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
                    onClick={hanldeClickLogin}
                >
                    Login
                </Button>
                <Button
                    color="success"
                >
                    <Link
                        to="/register"
                        className='nav-link'
                    >Register</Link>
                </Button>
            </Form>
        </>
    )
}

export default Login;