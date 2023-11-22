import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import bookService from "../services/bookService";
const AddBook = ({onAddBook,id,setBookId}) => {
    const[buttonSwitch,setSwitch]=useState(false)
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [status,setStatus]=useState("available")
    const[err,setErr]=useState(false)
     const handleSwitchChange = (e) => {
       setStatus(e.target.checked ? "available" : "not available");
     };

     const handleSubmit=async(e)=>{
e.preventDefault()
        const newBook={
            title,
            author,
            status
        }
        console.log(newBook);
        try{
            if(id!==undefined && id!==""){
await bookService.updateBook(id,newBook);
setSwitch(true)
setBookId("")
onAddBook();
            }else{
await bookService.addBooks(newBook);
onAddBook();
            }

        }catch{
            setErr(true)
        }
        setTitle("");
        setAuthor("");
     }
     const handleEdit=async()=>{
const docSnap=await bookService.getBook(id);
console.log(docSnap.data());
setSwitch(true)
setTitle(docSnap.data().title);
setAuthor(docSnap.data().author);
setStatus(docSnap.data().status);
     }
     useEffect(()=>{
        if(id!==undefined && id!==""){
            handleEdit()
        }
     },[id])
  return (
    <div >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
          />
        </Form.Group>

        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={status === "available"}
                onChange={handleSwitchChange}
              />
            }
            label="Available"
          />
        </FormGroup>
        <Button type="submit" sx={{ width: "50%", marginLeft: "5.7rem" }} variant="contained">
         {buttonSwitch?"Update":"Add"}
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
