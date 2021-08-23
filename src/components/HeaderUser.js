import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { Container } from 'react-bootstrap';

import "./HeaderSchedule.css"

const HeaderUser = () => {

	return (

		<div className="header-schedule">
			<Container className="d-flex justify-content-between align-items-center pt-3 pb-3">
				<ul className="d-flex">
					<li>
						<button className="d-flex justify-content-center align-items-center">

							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
								<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
								<path d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
								<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
							</svg>

							<div className="header-schedule-name">구성원</div>
						</button>
					</li>
				</ul>
				<div>
					<div className="btn-wrap">
					
						<button
							className="btn-active">
							<div className="btn-point">
								<span><AiOutlinePlus className="btn-icons" /></span>
								<span className="btn-icon-name"><Link to="/add-user" className="add-user-btn">구성원 추가</Link></span>
							</div>
						</button>
					</div>
				</div>
			</Container>
		</div>

	);
}

export default HeaderUser;