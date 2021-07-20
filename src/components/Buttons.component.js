import React from 'react';
import '../style.css';
import { Button, Row, Col } from 'react-bootstrap';

export default function AlertExceeded(props) {
  const { increase, decrease, percentage, disabled } = props;
  const styleCol = { display: 'flex', justifyContent: 'center' };
  const styleButton = {
    width: '10rem',
    margin: '0'
  };
  return (
    <Row>
      <Col style={styleCol}>
        <Button
          style={styleButton}
          onClick={increase}
          disabled={percentage == 100 || disabled}
          className="m-4"
          variant="info"
        >
          Aumentar
        </Button>{' '}
      </Col>
      <Col style={styleCol}>
        <Button
          style={styleButton}
          onClick={decrease}
          disabled={percentage == 0 || disabled}
          className="m-4"
          variant="outline-info"
        >
          Disminuir
        </Button>{' '}
      </Col>
    </Row>
  );
}
