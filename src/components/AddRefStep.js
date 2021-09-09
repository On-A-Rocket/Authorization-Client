import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const AddRefStep = () => {

  return (
    <div className="apply-subject-wrap">
      <div className="apply-subject-inner">
        <h3 className="apply-subject-title mb-3">참조 대상</h3>
      </div>

      <div className="apply-subject-step p-3 mt-3 mb-3">
        <button className="apply-subject-btn">
          <div className="apply-subject-plus">
            <div className="apply-subject-plus-icon">
              <span className="plus-icon-circle"><AiOutlinePlus className="plus-icon" /></span>
            </div>
            <span className="apply-subject-txt">대상 추가하기</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AddRefStep;
