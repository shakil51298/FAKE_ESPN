import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons'


const Carts = (props) => {
    const history = useHistory();
   
    const { idLeague, strLeague, strSport } = props.cartData;
    const handler =()=>{
        history.push(`/League/${idLeague}`)
    }
    return (
        <Card className="text-center shadow bg-body">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{strLeague}</Card.Title>
                <Card.Title>Lague Id: {idLeague}</Card.Title>
                <p className="badge bg-danger">Sports Type: {strSport}</p>
                <div>
                <button className="btn btn-info" onClick={handler}>Expoler <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Carts;