import { useEffect, useState } from "react";
import BookItem from "../../components/BookItem";
import Table from 'react-bootstrap/Table';

const Home = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/api/member/getAll")
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setMembers(res);
      });
  }, []);

  return (
    <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name.</th>
              <th>userEmail</th>
              <th>BirthYear</th>
              <th>Gender</th>
            </tr>
          </thead>
        </Table>
      {members.map((member) => (
        <BookItem key={member.id} book={member}/>
      ))}
    </div>

  );
};

export default Home;
