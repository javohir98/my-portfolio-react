/** @format */

import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-scroll';


function Navbar() {
	const [navbar, setNavbar] = useState(false);
	const [click, setClick] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 180) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);



	return (
		<div>
			<header className={navbar ? 'active' : ''}>
				<Link className='logo'>
					Javohir Erkinov
				</Link>
				<ul>
					<li>
						<Link smooth={true} duration={2000} to='ban'>Home</Link>
					</li>
					<li>
						<Link smooth={true} duration={2000} to='about'>About</Link>
					</li>
					<li>
						<Link smooth={true} duration={5000} to='contact'>Contact</Link>
					</li>
				</ul>
				<i
					className={click ? 'fas fa-times' : 'fas fa-bars'}
					onClick={handleClick}
					handleClick={closeMobileMenu}
				/>
			</header>
			<div className={`mobile-menu ${click ? 'active' : '	'}`}>
				<ul>
					<li>
						<Link smooth={true} duration={2000} to='ban'>Home</Link>
					</li>
					<li>
						<Link smooth={true} duration={2000} to='about'>About</Link>
					</li>
					<li>
						<Link smooth={true} duration={2000} to='contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
