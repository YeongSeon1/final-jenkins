import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = (props) => {
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

  const editMember = (e) => {
    e.preventDefault();

    if(member.name.length === 0){
      alert("이름을 입력해주세요.");
      return navigate("/saveForm");
    }
  
    if(member.userEmail.length === 0){
      alert("이메일을 입력해주세요..");
      return navigate("/saveForm");
    }
  
    if(member.birthYear === 0){
      alert("출생년도를 입력해주세요.");
      return navigate("/saveForm");
    }else if(member.birthYear < 1800 || member.birthYear > 2022){
      alert("출생년도를 확인해주세요.");
      return navigate("/saveForm");
    }
  
    if(member.gender.length === 0){
      alert("성별을 선택해주세요.");
      return navigate("/saveForm");
    }

    fetch(`/api/member/edit/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(member),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          navigate(`/book/${id}`);
        } else {
          alert("등록 실패");
        }
      });
  };
  const changeValue = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={editMember}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> 이름 </Form.Label>
        <Form.Control
          type="text"
          placeholder="이름 입력"
          onChange={changeValue}
          name="name"
          value={member.name}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> 이메일 </Form.Label>
        <Form.Control
          type="email"
          placeholder="이메일 입력"
          onChange={changeValue}
          name="userEmail"
          value={member.userEmail}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> 출생년도 </Form.Label>
        <Form.Control
          type="number"
          placeholder="출생년도 입력"
          onChange={changeValue}
          name="birthYear"
          value={member.birthYear}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group>
        <label>성별</label>
        <div>
          <input
            type="radio"
            value="M"
            name="gender"
            onChange={changeValue}
          /> 남자
          <input
            type="radio"
            value="F"
            name="gender"
            onChange={changeValue}
          /> 여자
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
  );
};
export default UpdateForm;
