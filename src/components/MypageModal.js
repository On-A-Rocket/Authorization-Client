import React from 'react';
import HRinformation from './HRinformation';

import { Row, Col } from 'react-bootstrap';
import {GrClose} from 'react-icons/gr';
import { ModalContext } from '../context/ModalContext';
const MypageModal = () => {
  let { handleModal } = React.useContext(ModalContext);

  return (

    <div className="apply-vacation-wrap">
      <div className="apply-vacation-inner">
        <div className="d-flex flex-column h-100">
          <div className="modal-header justify-content-end">
            <button onClick={handleModal}>
              <GrClose/> 
            </button>
          </div>
          <div className="h-100 d-flex hr-information-wrap">
            <Col md={4} className="h-100 mypage-left-wrap">
              <HRinformation />
            </Col>
            <Col md={8} className="h-100 mypage-left-right">
              <div>
                
              </div>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MypageModal;