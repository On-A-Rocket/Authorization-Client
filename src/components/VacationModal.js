import React, { useState, useRef } from 'react';
import { Container, Row, Col, Dropdown, Form } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { ModalContext } from '../context/ModalContext';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from "date-fns/esm/locale"
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import AddStep from './AddStep';


const VacationModal = () => {
  let { handleModal } = React.useContext(ModalContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [countList, setCountList] = useState([0]);

  const onAddStep = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    
    countArr.push(counter);
    setCountList(countArr);
    
  }

  registerLocale("ko", ko);

  console.log(startDate, endDate)

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (

    <div className="apply-vacation-wrap">
      <div className="apply-vacation-inner d-flex">
        <div className="apply-vacation-inner-left d-flex flex-column">
          <div>
            <div className="apply-vacation-title mb-5 d-flex align-items-center">
              <div>
                <span aria-label="🏝️, desert_island" className="emoji px-2"><span>🏝️</span></span>
              </div>
              <div className="vacation-title-text">연차</div>
            </div>
          </div>
          <div className="apply-vacation-datePick d-flex mb-5">
            <div>
              <span>시작일</span>
              <span>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="날짜를 선택해주세요."
                  dateFormat="yyyy.MM.dd(eee)"
                  minDate={new Date()}
                  locale="ko"
                />
              </span>
            </div>
            <div>
              <span>종료일</span>
              <span>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="날짜를 선택해주세요."
                  dateFormat="yyyy.MM.dd(eee)"
                  locale="ko"
                  minDate={startDate}
                />
              </span>
            </div>

          </div>
          <div>
            <ul className="vacation-list-wrap">
              <li className="vacation-lists">
                <div className="vacation-list-item d-flex justify-content-between align-items-center">
                  <div className="vacation-list-date d-flex jutify-content-between">
                    {startDate && endDate &&
                      (
                        <>
                          <span className="vacation-list-date-text">
                            {moment(startDate).format('YYYY.MM.DD')} ~ {moment(endDate).format('YYYY.MM.DD')}
                          </span>
                          <Form.Select aria-label="Default select example" className="vacation-type-select">
                            <option>선택</option>
                            <option value="1">오전반차</option>
                            <option value="2">오후반차</option>
                            <option value="3">하루종일</option>
                          </Form.Select>
                        </>
                      )}
                  </div>

                </div>
              </li>
            </ul>
          </div>
          <div className="apply-vacation-inner-close">
            <div className="d-flex align-items-center justify-content-end">
              <button onClick={handleModal}>닫기</button>
              <button className="apply-vacation-btn">등록하기</button>
            </div>
          </div>
        </div>
        <div className="apply-vacation-inner-right">
          <div className="apply-subject-wrap">
            <div className="apply-subject-inner">
              <h3 className="apply-subject-title mb-3">승인 대상</h3>
            </div>
                        
            {countList && countList.map( (item, i) => (

            <div key={i} className="apply-subject-step p-3 mt-3 mb-3">
              <p className="apply-subject-title">{i+1}단계</p>
              {show ?

                <AddStep target={target.current} show={show} />
                : <button className="apply-subject-btn" ref={target} onClick={() => setShow(!show)}>

                  <div className="apply-subject-plus">
                    <div className="apply-subject-plus-icon">
                      <span className="plus-icon-circle"><AiOutlinePlus className="plus-icon" /></span>
                    </div>
                    <span className="apply-subject-txt">대상 추가하기</span>
                  </div>

                </button>
              }


            </div>
            ))}
          </div>

          <div className="apply-add">
            <button className="apply-add-wrap" onClick={onAddStep}>
              <div className="apply-add-step">단계 추가하기</div>
            </button>
          </div>
          <div className="apply-subject-wrap">
            <div className="apply-subject-inner">
              <h3 className="apply-subject-title mb-3">참조 대상</h3>
            </div>

            <div className="apply-subject-step p-3 mt-3 mb-3">
              <button className="apply-subject-btn">
                <div className="apply-subject-plus">
                  <div className="apply-subject-plus-icon">
                    <span className="plus-icon-circle"><AiOutlinePlus className="plus-icon" /></span>
                  </div>
                  <span className="apply-subject-txt">대상 추가하기</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default VacationModal;