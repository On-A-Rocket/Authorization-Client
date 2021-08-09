import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { ModalContext } from '../context/ModalContext';

const VacationModal = () => {

  let {handleModal} = React.useContext(ModalContext);

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
            <div>시작일</div>
            <div>종료일</div>
          </div>
          <div>
            <ul className="vacation-list-wrap">
              <li className="vacation-lists">
                <div className="vacation-list-item d-flex justify-content-between align-items-center">
                  <div className="vacation-list-date">
                    <span className="vacation-list-date-text">8월 16일 (화)</span>
                  </div>
                  <div>
                    <Dropdown>
                      <Dropdown.Toggle className="drop-down-menu" id="dropdown-basic">
                        선택
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">오전반차</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">오후반차</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">하루종일</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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

            <div className="apply-subject-step p-3 mt-3 mb-3">
              <p className="apply-subject-title">1단계</p>
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
          <div className="apply-add">
            <button className="apply-add-wrap">
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