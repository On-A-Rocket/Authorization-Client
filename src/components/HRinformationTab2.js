import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { RiPencilFill } from 'react-icons/all';

const HRinformationTab2 = () => {

  return (
    <>
      <Col className="hr-top-content">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="hr-content-title">휴가 현황</h4>
        </div>

        <div>
          <ul>
            <li>
              <span>남은연차 : </span>
              <span>4</span>
            </li>
            <li>
              <span>총 연차 : </span>
              <span>12</span>
            </li>
          </ul>
        </div>
      </Col>
      <Col className="hr-bottom-content">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="hr-content-title">휴가 사용 내역</h4>
          <Col sm={3}>
            <Form.Select id="inlineFormCustomSelect">
              <option value="0">2021년</option>
              <option value="1">2020년</option>
            </Form.Select>
          </Col>
        </div>

        <div>
          <ul className="hr-vacation-lists mt-3">
            <li className="hr-vacation-item">
              <div className="hr-vacation-item-inner d-flex">
                <div className="vacation-type">
                  연차
                </div>
                <div className="vacation-progress">
                  <span>예정</span>
                </div>
                <div className="vacation-used-time">
                  1일
                </div>
                <div className="vacation-use-date">
                  12.20 (화)
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
}

export default HRinformationTab2;