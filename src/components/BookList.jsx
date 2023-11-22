import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Table from "react-bootstrap/Table";
import { DeleteForever, EditNote, Refresh } from '@mui/icons-material';
import { Button } from 'react-bootstrap';
import bookService from '../services/bookService';
import { doc } from 'firebase/firestore';

const BookList = ({ updateBookList, getBookId }) => {
  const [books, setBooks] = useState([]);
  const getBook = async () => {
    const data = await bookService.getAllBooks();
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // console.log(books);
  useEffect(() => {
    getBook();
  }, [updateBookList]);
const refresh=()=>{
    getBook()
}
  const handleDelete = async (id) => {
    await bookService.deleteBook(id);
    getBook();
  };
  return (
    <div style={{ width: "85%", marginTop: "20px", overflow: "hidden" }}>
                <button onClick={refresh} style={{border:"0", padding:"5px", borderRadius:" 6px 6px 0px 0px", backgroundColor:"black", color:"white"}} className='mt-2'>refresh list <Refresh></Refresh></button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((i, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{i.title}</td>
                <td>{i.author}</td>
                <td>{i.status}</td>
                <td style={{ width: "15%" }}>
                  <Button
                    style={{ marginLeft: "15px", width: "40%" }}
                    variant="primary"
                    onClick={(e) => getBookId(i.id)}
                  >
                    Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={(e) => handleDelete(i.id)}>
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))
          ) : (
            <span>No Book Found</span>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BookList