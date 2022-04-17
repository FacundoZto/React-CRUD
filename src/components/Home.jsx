import {Container} from 'react-bootstrap'
import ProductList from './ProductList.jsx';

const Home = () => {
	return (
		<Container fluid>
			<h2 className='text-center'>Listado de motos</h2>
			<ProductList/>
		</Container>
		)
}

export default Home;