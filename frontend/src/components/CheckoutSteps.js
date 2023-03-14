import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function CheckoutSteps(props) {
    return (
        <Row className="checkout-steps mt-5">
            <Col md={3} className={props.step1 ? 'active' : ''}>Sign-In</Col>
            <Col md={3} className={props.step2 ? 'active' : ''}>Shipping</Col>
            <Col md={3} className={props.step3 ? 'active' : ''}>Payment</Col>
            <Col md={3} className={props.step4 ? 'active' : ''}>Place Order</Col>
        </Row>
    );
}
