import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import { IoIosArrowForward, FaPen, AiOutlinePlus } from 'react-icons/all'
import { Button } from 'bootstrap';


const WorkList = () => {
  const [isShow, setShow] = useState(false);
  const handleShow = () => setShow(!isShow);
  const [isModify, setModify] = useState(true);
  const handleModify = () => setModify(!isModify);

  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

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
          <>
            {
              isShow ?
                <div>
                  <Col className="pt-3 pb-3 work-lists-wrap modify">
                    <div className="d-flex work-list-content">
                      <div className="work-list-date">
                        7.26 (화)
                      </div>
                      <div className="work-list-workingTime d-flex flex-column">

                        <>
                          {isModify ?
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
                              <button className="workingTime-time-modify" onClick={handleModify}>
                                <span>
                                  <FaPen />
                                </span>
                              </button>
                            </div>
                            :
                            <div className="d-flex">
                              {/* <div>
                          {chosenEmoji ? (
                            <span>{chosenEmoji.emoji}</span>
                          ) : (
                            <span>No emoji Chosen</span>
                          )}
                          <Picker 
                            onEmojiClick={onEmojiClick} 
                            groupVisibility={{
                              flags: false,
                              animals_nature: false,
                              food_drink: false,
                              symbols:false
                            }}  
                          />
                        </div> */}
                              <Col xs={2} className="me-3">
                                <Form.Select defaultValue="근무" className="workingTime-workType-text workingTime-workType-modify" size="sm">
                                  <option>근무</option>
                                  <option>외근</option>
                                  <option>출장</option>
                                  <option>반차</option>
                                  <option>연차</option>
                                </Form.Select>
                              </Col>
                              <div className="d-flex align-items-center">
                                <div className="d-flex">
                                  <div className="d-flex justify-content-center align-items-center me-1">오전</div>
                                  <div>
                                    <Form.Select size="sm" defaultValue="9:00">
                                      <option>9:00</option>
                                      <option>10:00</option>
                                      <option>11:00</option>
                                    </Form.Select>
                                  </div>
                                </div>
                                <div className="mx-2">~</div>
                                <div className="d-flex">
                                  <div className="d-flex justify-content-center align-items-center me-1">오후</div>
                                  <div>
                                    <Form.Select size="sm" defaultValue="6:00">
                                      <option>12:00</option>
                                      <option>1:00</option>
                                      <option>2:00</option>
                                      <option>3:00</option>
                                      <option>4:00</option>
                                      <option>5:00</option>
                                      <option>6:00</option>
                                      <option>7:00</option>
                                      <option>8:00</option>
                                      <option>9:00</option>
                                      <option>10:00</option>
                                    </Form.Select>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-center align-items-center">
                                <button className="workingTime-time-modify" onClick={handleModify}>수정</button>
                              </div>
                            </div>
                          }
                        </>

                        <div className="work-list-add px-2 pt-3 pb-3">
                          <div className="d-flex align-items-center">
                            <span className="me-3 px-1 d-flex justify-content-center align-items-center"><AiOutlinePlus /></span>
                            <span>시간 입력하기</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="work-modify-close-wrap">
                      <div className="pt-2 pb-2 d-flex justify-content-end">
                        <button className="work-modify-closeBtn" onClick={handleShow}>닫기</button>
                      </div>
                    </div>
                  </Col>
                </div>
                : <div onClick={handleShow} className="work-list-wrap d-flex align-items-center">
                  <Col className="pt-3 pb-3 d-flex">
                    <div className="work-list-date">
                      7.26 (화)
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
                  </Col>
                </div>
            }
          </>
        </Row>
      </Container>
    </>
  );
}

export default WorkList;