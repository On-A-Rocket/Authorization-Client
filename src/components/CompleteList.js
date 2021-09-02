import React from 'react';
import { Row, Col, Nav, Tab, Button } from 'react-bootstrap';

const CompleteList = () => {

  return(
  
    <Col>
      <ul className="pending-list-wrap">
        <li className="pending-list-item">
          <div className="pending-list-item-inner">
            <span className="pending-user-name">호정</span>
            <p className="pending-request">승인 완료 - '연차 사용'</p>
            <Button className="view-pending-content" variant="outline-primary" size="sm">내용 보기</Button>
          </div>
        </li>
      </ul>
    </Col>
    
  );
}

export default CompleteList;