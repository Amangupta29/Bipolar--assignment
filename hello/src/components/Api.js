/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
	const [user, setUser] = useState([]);
	const[heart,setHeart] =useState(false)

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				console.log('USERS', res.data);
				setUser(res.data);
			})
			.catch((err) => {
				console.log('ERROR', err);
			});
	}, []);

	const removeItem = (e, index) => {
		const data = [...user];
		console.log('Data', data);
		if (index !== -1) {
			data.splice(index, 1);
		}
		console.log('ewewewe', data);
		setUser(data);
	};

	return (
		<div className='flexing'>
			{user &&
				user.map((person, index) => {
					return (
						<div
							className='card'
							key={index}>
							<div className='imaging'>
								<img
									className='avatar'
									src={`https://avatars.dicebear.com/v2/avataaars/${person.username}.svg?options[mood][]=happy`}
									alt='gmnfmg'
								/>
							</div>
							<h3>{person.name}</h3>
							<div className='text'>
								<span>
									<i
										className='fas fa-light fa-envelope'
										style={{ paddingRight: '10px' }}></i>
									{person.email}
								</span>
								<span>
									<i
										className='fas fa-solid fa-phone'
										style={{ paddingRight: '10px' }}></i>
									{person.phone}
								</span>
								<span>
									<i
										className='fas fa-light fa-globe'
										style={{ paddingRight: '10px' }}></i>
									{person.website}
								</span>
							</div>
							<div className='part'>
								<div className='remove-a'>
									<button
										className='lauda'
										style={{
											background: 'none',
											border: 'none',
											cursor: 'pointer',
											outline: 'none',
										}}></button>
									<i   onClick={()=>setHeart(!heart)}
										className={heart === true?'fa fa-heart':'fa-regular fa-heart'}
										style={{ color: 'rgb(255,0,0)', fontSize: '20px' }}></i>
								</div>
								<div className='remove-b'>
									<button
										style={{
											background: 'none',
											border: 'none',
											cursor: 'pointer',
											outline: 'none',
										}}></button>

									<i
										className='fas fa-solid fa-pen'
										style={{ color: 'black' }}></i>
								</div>
								<div className='remove-c'>
									<i
										className='fas fa-trash-alt remove'
										onClick={(e) => removeItem(e, index)}></i>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Api;
