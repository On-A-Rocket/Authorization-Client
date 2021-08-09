import React from 'react';
import { MdBeachAccess } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import './VacationButton.css'
import VacationModal from './VacationModal';

import { ModalContext } from '../context/ModalContext';

const VacationButton = () => {
  let { handleModal} = React.useContext(ModalContext);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="btn-wrap pe-3">
          <button className="btn-disabled">
            <div className="btn-point">
              <span className="btn-icon-name">
                휴가 신청 내역
              </span>
            </div>
          </button>
        </div>
        <div className="btn-wrap">
          <button 
            className="btn-active" 
            onClick={ ()=> handleModal(<VacationModal/>)}>
            <div className="btn-point">
              <span><MdBeachAccess className="btn-icons"/></span>
              <span className="btn-icon-name">휴가사용</span>
            </div>
          </button>
        </div>
        
      </div>
    </>
  )
}

export default VacationButton;