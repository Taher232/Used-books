import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import books from '../books'
import PropTypes from 'prop-types';


const BookScreen = (props) => {
       const match = props.match
       
       const book = books.find((b) => b._id === match.params.id)
       
       return (
              <>

                     <Link className='btn btn-light my-3' to='/' >
                            Go Back</Link>

                     <Row>
                            < Col md={6}>
                                   <image src={book.image} alt={book.name} fluid />

                            </Col>

                            <Col md={3}>

                                   <ListGroup variant='flush'>

                                          <ListGroup.Item>

                                                 <h3>{book.name} </h3>
                                          </ListGroup.Item>

                                          <ListGroup.Item>

                                                 <Rating value={book.rating}
                                                        text={`${book.numReviews} reviews`}
                                                 />


                                          </ListGroup.Item>

                                          <ListGroup.Item>


                                                 price:${book.price}
                                          </ListGroup.Item>


                                          <ListGroup.Item>

                                                 Description:${book.description}
                                          </ListGroup.Item>

                                   </ListGroup>




                            </Col>

                     </Row>


              </>

       )

}


export default BookScreen
