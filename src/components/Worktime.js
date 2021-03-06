import React, {useState} from 'react';
import { Col } from 'react-bootstrap';

const Worktime = () => {
  


  return (
    <Col>
      <button className="work-list-wrap d-flex align-items-center">
        <div className="work-list-date">
          7.26 (μ)
        </div>
        <div className="work-list-workingTime d-flex align-items-center">
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
        </div>
      </button>
    </Col>
  );
}

export default Worktime;