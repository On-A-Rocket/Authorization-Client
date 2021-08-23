import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/all';
import Header from '../components/Header';
import "../components/HeaderSchedule.css";

const AddUser = () => {

  return (
    <>
    <Header />
    <div>
      <div className="header-schedule">
        <Container className="d-flex justify-content-between align-items-center pt-3 pb-3">
          <ul className="d-flex">
            <li className="add-user-back">
              <Link to="/user" className="add-user-back-link d-flex justify-content-center align-items-center">

                <AiOutlineArrowLeft />

                <div className="header-schedule-name add-user-back-text">구성원</div>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      <Container className="add-user-wrap">
        <Row className="flex-column align-items-center">
          <Col className="pt-3 pb-3">
            <h3 className="add-user-title">구성원 추가</h3>
          </Col>
          <Col xs={4}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="inlineFormInputName"
                type="username"
                placeholder="이름"
              />
              <label htmlFor="inlineFormInputName">이름</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="inlineFormInputID"
                type="username"
                placeholder="아이디"
              />
              <label htmlFor="inlineFormInputID">아이디</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">비밀번호</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">이메일</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">입사일</label>
            </Form.Floating>
            <FloatingLabel controlId="floatingSelect" label="근무유형" className="mb-3">
              <Form.Select aria-label="근무유형">
                <option>고정</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs={4}>
            <Button variant="primary" type="submit" className="form-submit mt-3 mb-3">
              저장하기
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default AddUser;