import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { BiHome } from "react-icons/bi";

const NavBar = () => {
	return(
		<Navbar bg="success opacity-75" variant="dark">
	    <Container fluid>
	    <Link to='/home' className='navbar-brand'>
	      	<BiHome style={{
	      		fontSize: '23px', 
	      		position: 'relative', 
	      		bottom: '4px',
	      		marginRight: '10px',
	      		marginLeft: '5px'
	      	}} />
	     </Link>
	    <Nav className="me-auto">
	      <Link className='nav-link' to='/new'>Nuevo</Link>
	    </Nav>
	    </Container>
	  </Navbar>
		)
};

export default NavBar;