import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Button } from "react-bootstrap";

const BookItem = (props) => {
  const { id, name, userEmail, birthYear, gender } = props.book;

  const deleteMember = () => {
    axios
      .delete(`/api/member/delete/${id}`)
      .then((res) => window.location.replace("/"))
      .catch((error) => console.log(error));
  };


  return (
    <div style={{textAlign: "center"}} >
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{userEmail}</td>
              <td>{birthYear}</td>
              <td>{gender}</td>
              <td><Link to={"/book/" + id} className="btn btn-primary" variant="primary">회원수정</Link></td>
              <td><Button onClick={deleteMember} className="btn btn-primary" variant="primary">회원삭제</Button></td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
};

export default BookItem;
