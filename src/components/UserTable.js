import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { MdSettings, GoSearch } from 'react-icons/all';

const UserTable = () => {

  return (
    <Container className="d-flex justify-content-between">
      <div className="user-wrap-left p-2">
        <div className="user-wrap-inner">
          <div className="px-3 company-wrap d-flex justify-content-between align-items-center">
            <span className="company-name">Flexsys</span>
            <span className="setting-icon-wrap"><MdSettings className="setting-icon" /></span>
          </div>
          <div className="user-table-wrap px-3">
            <ul className="user-table-list">
              <li className="user-table-item d-flex justify-content-between align-items-center">
                <div className="user-table-job">개발팀</div>
                <div className="user-table-counts"><span className="user-table-count">1</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="user-wrap-right flex-column p-2">
        <div className="user-wrap-inner">
          <div className="user-search">
            <div className="user-search-box px-3">
              <span><GoSearch /></span>
              <input className="user-search-input" type="text" placeholder="이름,조직,역할을 검색해보세요." />
            </div>
          </div>
          <div>
            <div className="user-lists">
              <div className="user-total-count pt-2 pb-2 px-3">전체구성원 (N)</div>
              <div type="button" className="d-flex align-items-center px-3 pt-4 pb-4">
                <div className="user-thumb"><span className="user-thumb-text">호정</span></div>
                <div className="user-name">안호정</div>
                <div className="user-job">
                  <span>개발팀</span>
                  <span>·</span>
                  <span>연구원</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}

export default UserTable;