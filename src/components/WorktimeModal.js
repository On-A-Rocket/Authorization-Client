import React, {useState} from 'react';
import { Col } from 'react-bootstrap';
import { FaPen, AiOutlinePlus } from 'react-icons/all'

const WorktimeModal = ( ) => {
  

  return (
    <>
      <Col className="pt-3 pb-3 work-lists-wrap modify">
        <button>
          <div className="d-flex work-list-content">
            <div className="work-list-date">
              7.26 (ν)
            </div>
            <div className="work-list-workingTime d-flex flex-column">
              <div className="d-flex align-items-center">
                <div className="workingTime-emoji px-2 me-3">
                  <span aria-label="π¨π»βπ», male-technologist">
                    <span>π¨π»βπ»</span>
                  </span>
                </div>
                <div className="workingTime-workType px-2 me-3 pt-1 pb-1">
                  <span className="workingTime-workType-text">κ·Όλ¬΄</span>
                </div>
                <div className="workingTime-time">
                  μ€μ  09:00 ~ μ€ν 06:00
                </div>
                <button className="workingTime-time-modify">
                  <span>
                    <FaPen />
                  </span>
                </button>
              </div>
              <div className="work-list-add px-2 pt-3 pb-3">
                <div className="d-flex align-items-center">
                  <span className="me-3 px-1 d-flex justify-content-center align-items-center"><AiOutlinePlus /></span>
                  <span>μκ° μλ ₯νκΈ°</span>
                </div>
              </div>
            </div>
          </div>
          <div className="work-modify-close-wrap">
            <div className="pt-2 pb-2 d-flex justify-content-end">
              <button className="work-modify-closeBtn">λ«κΈ°</button>
            </div>
          </div>
        </button>
      </Col>
    </>
  );
}

export default WorktimeModal;