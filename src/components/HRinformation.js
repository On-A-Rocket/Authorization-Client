import React from 'react';
import { Tab, OverlayTrigger, Tooltip, Row, ListGroup, Col } from 'react-bootstrap';
import { IoIosCall, MdEmail, GiIsland, RiFileUserFill } from 'react-icons/all';
import HRinformationTab1 from './HRinformationTab1';
import HRinformationTab2 from './HRinformationTab2';

const HRinformation = () => {

  return (
    <div>
      <div className="hr-information-thumb">
        <span className="hr-information-thumbTxt">호정</span>
      </div>
      <div className="hr-information-profile">
        <p className="hr-information-name">안호정</p>
        <div className="user-json">
          <span>연구원</span>
          <span>·</span>
          <span>개발팀</span>
        </div>
      </div>


      <div className="hr-information-contact">
        <OverlayTrigger

          placement='bottom'
          overlay={
            <Tooltip id={`tooltip-bottom`}>
              010-1234-1234
            </Tooltip>
          }
        >
          <button className="contact-tooltip"><IoIosCall /></button>
        </OverlayTrigger>

        <OverlayTrigger

          placement='bottom'
          overlay={
            <Tooltip id={`tooltip-bottom`}>
              dksghwjd12@gmail.com
            </Tooltip>
          }
        >
          <button className="contact-tooltip"><MdEmail /></button>
        </OverlayTrigger>
      </div>
      <div className="hr-information-tabmenu">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">

          <ListGroup className="custom-hr-tabheader">
            <ListGroup.Item action href="#link1" className="custom-hr-tablist">
              <GiIsland className="hr-information-icon"/>인사 정보
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" className="custom-hr-tablist">
              <RiFileUserFill className="hr-information-icon"/>휴가
            </ListGroup.Item>
          </ListGroup>

          <Tab.Content className="custom-hr-tabcontents">
            <Tab.Pane eventKey="#link1" className="hr-contents">
              <HRinformationTab1 />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2" className="hr-contents">
              <HRinformationTab2 />
            </Tab.Pane>
          </Tab.Content>

        </Tab.Container>
      </div>


    </div>
  );
}

export default HRinformation;