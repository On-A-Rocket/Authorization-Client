import React from 'react';
import VacationButton from './VacationButton';
import HeaderCalender from './HeaderCalender';
import { Container } from 'react-bootstrap';
import "./HeaderSchedule.css"

import { ModalProvider } from '../context/ModalContext';

const HeaderSchedule = () => {

	return (
		<ModalProvider>
			<div className="header-schedule">
				<Container className="d-flex justify-content-between align-items-center pt-3 pb-3">
					<ul className="d-flex">
						<li>
							<button className="d-flex justify-content-center align-items-center">

								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
									<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
								</svg>

								<div className="header-schedule-name">내 스케줄</div>
							</button>
						</li>
						<li>
							<button className="d-flex justify-content-center align-items-center">

								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
									<path d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
									<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
								</svg>

								<div className="header-schedule-name">구성원 스케줄</div>
							</button>
						</li>
					</ul>
					<div>
						<HeaderCalender />
					</div>
					<div>
						<VacationButton />
					</div>
				</Container>
			</div>
		</ModalProvider>
	);
}

export default HeaderSchedule;