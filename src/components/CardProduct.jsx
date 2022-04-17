import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles/CardProduct.css';

const CardProduct = (props) => {
	return(
		<div className='col-md-4 mb-3'>
			<Card>
				<Card.Title className='text-center'>{props.trademark} {props.reference}</Card.Title>
				<img src={props.image} alt="" className='card-img-top image-card' />
				<Card.Body>
					<ListGroup>
						<ListGroupItem><strong>Modelo: </strong>{props.model}</ListGroupItem>
						<ListGroupItem><strong>Price: </strong>{props.price}</ListGroupItem>
					</ListGroup>
					<div className='mt-2 text-end'>
					<button className='btn btn-outline-success me-2' >Editar</button>
					<button className='btn btn-outline-danger ' >Eliminar</button>
					</div>
				</Card.Body>
			</Card>
		</div>
		)
}

export default CardProduct;