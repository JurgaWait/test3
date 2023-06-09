import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

export const NewBlog = () => {
    const [form, setForm] = useState({
        title: "",
        text: "",
        image: "",
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/posts", form)
        .then((response) => console.log('successful response', response))
        .catch((err) => console.log("err", err));
    }

    return (
        <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Post Image</Form.Label>
        <Form.Control onChange={handleChange} name="image" type="text" placeholder="Image url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Post Title</Form.Label>
        <Form.Control onChange={handleChange} name="title" type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post Text</Form.Label>
            <Form.Control onChange={handleChange} name="text" as="textarea" rows={3} />
</Form.Group>
<Button onClick={handleOnSubmit}>Add new post</Button>
</Form>






    )
};
