import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/books/${book._id}`}>
                <Card.Img src={book.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/books/${book._id}`}>
                    <Card.Title as='div'><strong>{book.name} </strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating
                        value={book.rating}
                        text={`${book.numReviews}reviews`} />

                </Card.Text>


                <Card.Text as='h3'>

                    ${book.price}

                </Card.Text>




            </Card.Body>
        </Card>
    )
}


export default Book


Book.propTypes = {
    book: PropTypes.any,
};