import React from 'react';
import '../style.css';
import { ProgressBar } from 'react-bootstrap';

export default function ProgressBar(props) {
  const { percentage } = props;
  return (
    <ProgressBar
      now={percentage}
      variant="info"
      className="m-4"
      label={`${percentage}%`}
    />
  );
}
