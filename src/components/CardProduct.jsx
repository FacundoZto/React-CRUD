import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles/CardProduct.css';
import {deletePost} from '../redux/actions.jsx';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2';

const CardProduct = (props) => {

	const dispatch = useDispatch();

	const handleDelete = () => {
		Swal.fire({
		  title: 'Estás seguro de eliminar el aviso?',
		  text: "No se podrá revertir",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, eliminar'
		}).then((result) => {
		  if (result.isConfirmed) {
		    dispatch(deletePost(props.id))
		    .then(response => {
		    	if(response.status === 200){
				Swal.fire(
				  'Publicación eliminada',
				  'El aviso ha sido borrado',
				  'success'
				)
				}else {
					Swal.fire({
					  icon: 'error',
					  title: 'Error',
					  text: 'No se ha podido borrar el aviso'
					})
				}
		    })
		  }
		})
	};

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
					<button className='btn btn-outline-danger ' onClick={handleDelete} >Eliminar</button>
					</div>
				</Card.Body>
			</Card>
		</div>
		)
}

export default CardProduct;