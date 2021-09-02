import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import Header from '../components/Header';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/all';
import "../components/HeaderSchedule.css";

const VacationList = () => {

  return (
    <>
      <Header />
      <div>
        <div className="header-schedule">
          <Container className="d-flex justify-content-between align-items-center pt-3 pb-3">
            <ul className="d-flex">
              <li className="add-user-back">
                <Link to="/work" className="add-user-back-link d-flex justify-content-center align-items-center">

                  <AiOutlineArrowLeft />

                  <div className="header-schedule-name add-user-back-text">근태관리</div>
                </Link>
              </li>
            </ul>
          </Container>
        </div>
        <Container>
          <Col className="mb-5">
            <div className="d-flex vacation-big-title">
              <h3 className="vacation-sub-title me-4">예정 휴가</h3>
              <div className="vacation-badge-future">
                <span className="vacation-badge-text">총 1.5일 예정</span>
              </div>
            </div>

            <div className="vacation-schedule">
              <h6 className="vacation-schedule-title mb-4">신청 완료</h6>
              <ul className="vacation-time-line">
                <li className="d-flex align-items-center">
                  <Col className="vacation-date" xs={3}>8.17 (화)</Col>
                  <div className="vacation-thumb-emoji mx-2">
                    <span aria-label="🏖️, beach_with_umbrella">
                      <span>🏖️</span>
                    </span>
                  </div>
                  <Col xs={1} className="vacation-name">연차</Col>
                  <Col xs={4} className="vacation-period">오전 9:00 ~ 오후 6:00</Col>
                  <Col xs={1} className="vacation-time">8H</Col>
                </li>
              </ul>

            </div>
          </Col>
          <Col className="mb-5">
            <div className="d-flex vacation-big-title">
              <h3 className="vacation-sub-title me-4">지난 휴가</h3>
              <div className="vacation-badge-past">
                <span className="vacation-badge-text">총 1일 사용</span>
              </div>
            </div>

            <div className="vacation-schedule">
              <ul className="vacation-time-line">
                <li className="d-flex align-items-center">
                  <Col className="vacation-date" xs={3}>8.17 (화)</Col>
                  <div className="vacation-thumb-emoji mx-2">
                    <span aria-label="🏖️, beach_with_umbrella">
                      <span>🏖️</span>
                    </span>
                  </div>
                  <Col xs={1} className="vacation-name">연차</Col>
                  <Col xs={4} className="vacation-period">오전 9:00 ~ 오후 6:00</Col>
                  <Col xs={1} className="vacation-time">8H</Col>
                </li>
              </ul>

            </div>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default VacationList;