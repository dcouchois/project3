import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import User from '../../../utils/Stores/User';
import Beat from '../../../utils/Stores/Beat';
import { BeatCard } from '../../../components/Beat';

export default function () {
    User.refreshOnLoad();
    // every time the user hits the jams page we will reload beats.
    Beat.refreshOnLoad();
    const [{beats, pageLoading}] = Beat.useContext();

    return pageLoading ? (
            <div className="d-flex justify-content-center mt-5">
                <Spinner className="mt-5" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        ) : (
        <Container className="mt-5">
            <Row>
                {beats.map(beat =>
                <Col xs={12} md={6} lg={4} xl={3}>
                    <BeatCard {...beat} />
                </Col>
                )}
            </Row>
        </Container>
        );
}