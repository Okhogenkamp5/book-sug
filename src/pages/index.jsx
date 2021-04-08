import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';



const MainPage = (props) => {
    return (
        <Container>

            
            <header className="App-header">
                <div>
                    <Row>
                        <Col>
                        <h1>Stacks</h1>
                        </Col>
                        <Col xs="auto">
                            <ButtonGroup>
                                <div class="btn-group btn-group-lg" role="group">
                                        <Button className="my-3" color="white" tag={Link} to="/Books">Add A Book to Your List</Button>
                                        <Button className="my-3" color="white" tag={Link} to="/BookList">View New York Times Bestseller List</Button>  
                                </div>
                            </ButtonGroup> 
                        </Col>
                    </Row>
                        
                </div>
            </header>

            <h2 style={{ color: 'white' }}>Welcome Book Enthusists!</h2>
        
            <h4 style={{ color: 'white' }}>Stacks gives users the ability to keep track of their current reading list, as well as rate the books they've read. In additon to this, users can view the current New York Times best sellers list.</h4>

            <h4 style={{ color: 'white' }}>--Happy Reading :)</h4>
            

        </Container>


    );
}

export default MainPage;