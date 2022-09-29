import React from "react";
import { Container, Spinner } from "react-bootstrap";

const SpinnerLoading = () => {
    return (
        <Container as="div" className="spinner-wrapper">
            <Spinner size="lg" animation="grow" />
        </Container>
    );
};

export default SpinnerLoading;
