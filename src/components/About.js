/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
	return (
		<section className='about' id='about'>
			<h1>About</h1>
			<div className='about__info'>
				<div className='about__left'>
					<h2 className='personal__data'>Personal data</h2>
					<h3>
						Name : <span>Javohir Erkinov</span>
					</h3>
					<h3>
						Age : <span>22</span>
					</h3>
					<h3>
						Residence : <span>Qarshi city, Uzbekistan</span>
					</h3>
					<h3>
						Address : <span>Karshi city of Kashkadarya region</span>
					</h3>
					<h3>
						Email : <Link>jerkinov072@gmail.com</Link>
					</h3>
					<h3>
						Phone : <span>+998 99 792 66 12</span>
					</h3>
				</div>
				<div className='about__right'>
					<h2 className='personal__info'>Personal information</h2>
				</div>
			</div>
		</section>
	);
}

export default About;
