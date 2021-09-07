import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { GoSearch } from 'react-icons/all';

const AddStep = ({ show }) => {
  const [stepClick, setStepClick] = useState(false);
  const [arr, setArr] = useState([]);

  let childrenArr = [];
  const getElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.children[0].outerText);
    for (var i = 0; i < e.currentTarget.children.length; i++) {
      childrenArr.push(e.currentTarget.children[i].outerText);
    }
    console.log(childrenArr);
    setArr(childrenArr);
    setStepClick(!stepClick);
  }


  return (
    <div className="add-step-wrap mt-2 mb-2">
      {stepClick ?
        <>
          {
            arr.map( (item,i) => (
              <span className="me-3" key={i}>
                {item}
              </span>
            ))
          }

        </>
        : <>
          <div className="user-search">
            <div className="add-step-box pt-2 pb-2">
              <span>대상자를 선택해 주세요.</span>
            </div>
          </div>


          <div>
            <div className="user-lists">
              <div
                type="button"
                className="d-flex align-items-center pt-2 pb-2 step-user"
                onClick={getElement}
              >

                <div className="user-name">안호정</div>
                <div className="user-job">
                  <span>개발팀</span>
                  <span>·</span>
                  <span>연구원</span>
                </div>
              </div>
              <div
                type="button"
                className="d-flex align-items-center pt-2 pb-2 step-user"
                onClick={getElement}
              >

                <div className="user-name">심승종</div>
                <div className="user-job">
                  <span>개발팀</span>
                  <span>·</span>
                  <span>주임연구원</span>
                </div>
              </div>
            </div>
          </div>
        </>
      }







    </div>
  );
}

export default AddStep;