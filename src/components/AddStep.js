import React, {useState} from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { GoSearch } from 'react-icons/all';

const AddStep = () => {

  const [selectStep, setSelectStep] = useState(false);

  return (
    <div className="add-step-wrap mt-2 mb-2">
      <div className="user-search">
        <div className="add-step-box d-flex justify-content-center align-items-center pt-2 pb-2">
          <span><GoSearch /></span>
          <input className="user-search-input" type="text" placeholder="이름,조직,역할을 검색해보세요." />
        </div>
      </div>

      <div>
        <div className="user-lists">
          <div type="button" className="d-flex align-items-center pt-2 pb-2 step-user" onClick={()=>setSelectStep(!selectStep)}>
            
            <div className="user-name">안호정</div>
            <div className="user-job">
              <span>개발팀</span>
              <span>·</span>
              <span>연구원</span>
            </div>
          </div>
          <div type="button" className="d-flex align-items-center pt-2 pb-2 step-user">
            
            <div className="user-name">심승종</div>
            <div className="user-job">
              <span>개발팀</span>
              <span>·</span>
              <span>주임연구원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStep;