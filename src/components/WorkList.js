import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { IoIosArrowForward, FaPen, AiOutlinePlus } from 'react-icons/all'


const WorkList = () => {

  return (
    <>
      <Container className="container-wrap p-5 mb-4">
        <Row>
          <Col>
            <p className="d-flex align-items-center">
              <span>고정 출퇴근</span>
              <IoIosArrowForward />
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="work-detail-subtitle">이번주 근무</p>
          </Col>
        </Row>

        <Row className="flex-column">
          <Col className="pt-3 pb-3">
            <div className="work-list-wrap d-flex align-items-center">
              <div className="work-list-date">
                7.26 (월)
              </div>
              <div className="work-list-workingTime d-flex align-items-center">
                <div className="workingTime-emoji px-2 me-3">
                  <span aria-label="👨🏻‍💻, male-technologist">
                    <span>👨🏻‍💻</span>
                  </span>
                </div>
                <div className="workingTime-workType px-2 me-3 pt-1 pb-1">
                  <span className="workingTime-workType-text">근무</span>
                </div>
                <div className="workingTime-time">
                  오전 09:00 ~ 오후 06:00
                </div>
              </div>
            </div>
          </Col>
          <Col className="pt-3 pb-3 work-lists-wrap modify">
            <div>
              <div className="d-flex work-list-content">
                <div className="work-list-date">
                  7.26 (화)
                </div>
                <div className="work-list-workingTime d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="workingTime-emoji px-2 me-3">
                      <span aria-label="👨🏻‍💻, male-technologist">
                        <span>👨🏻‍💻</span>
                      </span>
                    </div>
                    <div className="workingTime-workType px-2 me-3 pt-1 pb-1">
                      <span className="workingTime-workType-text">근무</span>
                    </div>
                    <div className="workingTime-time">
                      오전 09:00 ~ 오후 06:00
                    </div>
                    <button className="workingTime-time-modify">
                      <span>
                        <FaPen/>
                      </span>
                    </button>
                  </div>
                  <div className="work-list-add px-2 pt-3 pb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-3 px-1 d-flex justify-content-center align-items-center"><AiOutlinePlus/></span>
                      <span>시간 입력하기</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-modify-close-wrap">
                <div className="pt-2 pb-2 d-flex justify-content-end">
                  <button className="work-modify-closeBtn">닫기</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WorkList;