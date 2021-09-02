import React, { useState } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { RiPencilFill } from 'react-icons/all';

const HRinformationTab1 = () => {
  const [organization, setOrganization] = useState('개발팀');
  const [job, setJob] = useState('연구원');
  const [joinDate, setJoinDate] = useState('2021-06-07');
  const [name, setName] = useState('안호정');
  const [email, setEmail] = useState('test1234@gmail.com');
  const [phone, setPhone] = useState('010-1234-1234');
  const [userId, setUserId] = useState('ahj210607');


  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="hr-content-title">인사정보</h4>
        <button className="hr-content-modify-btn">
          <RiPencilFill />
        </button>
      </div>

      <div className="hr-form">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="organization">
            <Form.Label column sm={2}>
              조직
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder={organization} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="job">
            <Form.Label column sm={2}>
              역할(직무)
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder={job} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="joindate">
            <Form.Label column sm={2}>
              입사일
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder={joinDate} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="worktype">
            <Form.Label column sm={2}>
              근무유형
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder="고정근무" disabled />
            </Col>
          </Form.Group>
        </Form>
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <h4 className="hr-content-title">기본정보</h4>
        <button className="hr-content-modify-btn">
          <RiPencilFill />
        </button>
      </div>

      <div className="hr-form">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="name">
            <Form.Label column sm={2}>
              이름
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder={name} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm={2}>
              이메일
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder={email} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="phone">
            <Form.Label column sm={2}>
              휴대전화
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder={phone} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="userid">
            <Form.Label column sm={2}>
              아이디
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder={userId} disabled />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3" controlId="password">
            <Form.Label column sm={2}>
              비밀번호
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="password" placeholder="비밀번호" disabled/>
            </Col>
          </Form.Group>

        </Form>
      </div>
    </>
  );
}

export default HRinformationTab1;