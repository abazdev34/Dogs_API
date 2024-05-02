import { NavLink } from 'react-router-dom'
import "./header.css"
const Header = () => {
	return (
		<div className='header'>
			<div className="header_nav">
				{/* <NavLink to='/home'>Home</NavLink> */}
				<NavLink to='/dogs'>Dogs</NavLink>
			</div>
		</div>
	);
};

export default Header;