import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WorkSummary = () => {

  return (
    <>
      <Container className="container-wrap p-5 mb-4">
        <Row>
          <Col>
            <Row className="d-flex flex-column">
              <Col>
                <p className="work-detail-title">총 예정 근무</p>
                <div>
                  <span className="work-total-time">40</span>
                  <span>시간</span>
                </div>
              </Col>
              <Col>
                <div>bar</div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p className="work-detail-title">근무 상세</p>
                <div className="work-detail-wrapper d-flex">
                  <div className="work-detail d-flex justity-content-center align-items-center pe-4 me-3">
                    <span className="emoji px-2" role="img" aria-label="👩‍💻, female-technologist">👩‍💻</span>
                    <span className="work-detail-time">40</span>
                  </div>
                  <div className="work_detail d-flex justity-content-center align-items-center pe-4 me-3">
                    <span className="emoji px-2" role="img" aria-label="fire, 🔥">🔥</span>
                    <span className="work-detail-time">0</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p className="work-detail-title">유급 휴가</p>
                <div className="work-detail d-flex justity-content-center align-items-center pe-4 me-3">
                  <span className="emoji px-2" aria-label="🏖️, beach_with_umbrella">
                    <span>🏖️</span>
                  </span>
                  <span className="work-detail-time">15</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WorkSummary;