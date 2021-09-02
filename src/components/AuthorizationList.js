import React from 'react';
import { Container, Row, Col, Nav, Tab, ListGroup } from 'react-bootstrap';
import CompleteList from './CompleteList';
import PendingList from './PendingList';
import { ModalProvider } from '../context/ModalContext';

const AuthorizationList = () => {
  

  return (
    <>
    <ModalProvider>
      <Container className="container-wrap p-5 mb-4">
        <Row>
          <Col className="mb-3">

            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row className="d-flex flex-column">
                <Col className="d-flex">
                  <ListGroup className="pending-list-group">
                    <ListGroup.Item action href="#link1" className="pending-list-title">
                      결재 대기
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2" className="pending-list-title">
                      결재 완료
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                      <PendingList />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <CompleteList />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      </ModalProvider>
    </>
  );
}

export default AuthorizationList;