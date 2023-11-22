import React, { useState } from 'react'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import { Refresh } from '@mui/icons-material'

const App = () => {
   const [updateBookList, setUpdateBookList] = useState(false);
const[bookId,setBookid]=useState("")

const idHandler=(id)=>{
  console.log(`id is:${id}`);
setBookid(id)
}
   const handleAddBook = () => {
     setUpdateBookList((prev) => !prev);
   };
 
  return (
    <div>
      <Navbar></Navbar>
      <h1 style={{ textAlign: "center" }}>Add book</h1>
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          padding: "0",
          margin: "0",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "30%",
            border: "1px solid",
            padding: "30px",
            borderRadius: "6px",
          }}
        >
          <AddBook onAddBook={handleAddBook} id={bookId} setBookid={setBookid}></AddBook>
        </div>
        <BookList updateBookList={updateBookList} getBookId={idHandler}></BookList>
      </div>
    </div>
  );
}

export default App