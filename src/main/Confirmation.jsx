import '../App.css'
import {Container, Col, Row} from 'react-bootstrap';

export const Confirmation = props => {

    return(
        <Container>
            <Row>
                <Col lg={{span: 3, offset:9}}>
                    <p>Thanks for your feedback!</p>
                </Col>
            </Row>
        </Container>
    );
};