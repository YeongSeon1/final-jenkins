import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
  const id = useParams().id;

  const navigate = useNavigate();
  const [member, setMember] = useState({
    name: "",
    userEmail: "",
    birthYear: 0,
    gender: '',
  });

  useEffect(() => {
    axios.get(`/api/member/find/${id}`).then((res) => {
      setMember(res.data);
    });
  }, []);

  const deleteMember = () => {
    axios
      .delete(`/api/member/delete/${id}`)
      .then((res) => navigate("/"))
      .catch((error) => console.log(error));
  };
  const updateMember = () => {
    navigate(`/updateForm/${id}`);
  };
  

  return (
    <div style={{textAlign: "center"}}>
      <h1>회원 수정</h1>
      <Button variant="warning" onClick={updateMember}>
        수정
      </Button>
      <Button variant="warning" onClick={deleteMember}>
        삭제
      </Button>
      <hr />
      <h3>{member.name}</h3>
      <h3>{member.userEmail}</h3>
      <h3>{member.birthYear}</h3>
      <h3>{member.gender}</h3>
    </div>
  );
};

export default Detail;
