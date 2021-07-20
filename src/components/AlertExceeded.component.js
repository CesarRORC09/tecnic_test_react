import React from 'react';
import '../style.css';
import { Alert } from 'react-bootstrap';

export default function AlertExceeded(props) {
  const { message, variant } = props;
  return (
    <div>
      <Alert variant={variant}>{message}!</Alert>
    </div>
  );
}
