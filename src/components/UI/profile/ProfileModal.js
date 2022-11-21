import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { StyledProfileModal } from '../../../assets/style/profile/styled-profile-modal';

const ProfileModal = () => {
	const [logIn, setLogIn] = useState(true);

	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

	return (
		<StyledProfileModal notHomePage={notHomePage}>
			<h2 className='text-center'>Welcome in AlleDrogo!</h2>
			<span className='response-message'></span>
			<p className='text-center text-bold'>{logIn ? 'Log in' : 'Sign up'}</p>
			<form>
				<label htmlFor='login'></label>
				<input type='text' name='login' id='login' placeholder='Login' />
				<span className='login-error'></span>

				<label htmlFor='password'></label>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='Password'
				/>
				<span className='password-error'></span>
				<button>{logIn ? 'Log in' : 'Register'}</button>
			</form>
			<p className='paragraph-bottom'>
				{logIn ? "Haven't profile yet?" : 'Have a profile?'}
				<button onClick={() => setLogIn(!logIn)}>
					{!logIn ? 'Log in' : 'Sign up'}
				</button>
			</p>
		</StyledProfileModal>
	);
};

export default ProfileModal;
