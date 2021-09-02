import React from 'react';
import { ModalContext } from '../context/ModalContext';

const RequestVacation = () => {
  let { handleModal } = React.useContext(ModalContext);

  return (
    <>
      <div className="apply-vacation-wrap">
        <div className="apply-vacation-inner d-flex">
          <div className="apply-vacation-inner-left d-flex flex-column">
            <div className="request-step-wrap">
              <div className="request-step-inner">
                <h3 className="requst-step-title">
                  <span className="request-step">승인 0/3</span>
                  <span className="request-step-subtitle">연차 사용</span>
                </h3>
              </div>

            </div>
            <div>
              <div className="apply-vacation-title mt-5 mb-3 d-flex align-items-center">
                <div>
                  <span aria-label="🏝️, desert_island" className="emoji px-2"><span>🏝️</span></span>
                </div>
                <div className="vacation-title-text">연차 사용 계획</div>
              </div>
            </div>

            <div className="request-vacation-plan">
               <div className="request-vacation-date">
                 <p className="default-text">작성자 : 안호정</p>
                 <p className="default-text">작성 일시 : 2021.8.25 (목) 20:00</p>
               </div>
               <div className="request-vacation-contents mt-5">
                <p className="mb-4">현재 남은 연차 : </p>
                <ul className="vacation-duedate mb-4">
                  <li className="mb-1">연차 사용 예정일 : </li>
                  <li className="request-vacation-duedate">2021.9.5(월) - 2021.9.7(수) (3일)</li>
                  
                </ul>
                <ul className="vacation-duedate mb-4">
                  <li className="mb-1">메시지 : </li>
                  <li className="request-vacation-duedate">여름 휴가</li>
                </ul>
               </div>
            </div>
            <div className="apply-vacation-inner-close">
              <div className="d-flex align-items-center justify-content-end">
                <button onClick={handleModal}>닫기</button>
                <button className="apply-vacation-btn">등록하기</button>
              </div>
            </div>
          </div>
          <div className="apply-vacation-inner-right">
            <div className="apply-subject-wrap">
              <div className="apply-subject-inner">
                <h3 className="apply-subject-title mb-3">승인 대상</h3>
              </div>

              <div className="apply-subject-step p-3 mt-3 mb-3">
                <p className="apply-subject-title">1단계</p>
                <button className="apply-subject-btn">
                  <div className="apply-subject-plus">
                    <div className="apply-subject-plus-icon">
                      
                    </div>
                    <span className="apply-subject-txt">대상 추가하기</span>
                  </div>
                </button>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestVacation;