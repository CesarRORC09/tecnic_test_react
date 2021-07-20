import React, { useState, useRef } from 'react';
import '../style.css';

//Import components
import AlertExceeded from '../components/AlertExceeded.component';
import Buttons from '../components/Buttons.component';
import ProgressBar from '../components/ProgressBar.component';

//Import bootstrap's components
import { InputGroup, FormControl, Row, Col, Form } from 'react-bootstrap';

export default function MainView() {
  //set state
  const [percentage, setPercentage] = useState(20);
  const [handleErrorExceeded, sethandleErrorExceded] = useState(0);
  const [disabled, setDisabled] = useState(false);

  //set const
  const title = 'PRUEBA TÉCNICA';
  const defaultIncrease = 10;
  const defaultDecrease = 10;

  //set references
  const changeQuantityRef = useRef();

  //set styles
  const styleContainer = {
    backgroundColor: '#F2F2F2',
    borderRadius: '15px',
    paddingTop: '2px',
    paddingBottom: '2px',
    boxShadow: '7px 2px 2px #ccc',
    maxWidth: 650,
    minWidth: 400
  };
  const styleCenter = { display: 'flex', justifyContent: 'center' };
  const styleTitle = { fontSize: '35px', letterSpacing: '5px' };
  const styleImg = { width: '50px', borderRadius: '20px' };

  const increase = () => {
    sethandleErrorExceded(0);
    let changeString = changeQuantityRef.current.value;
    if (percentage + Number(changeString) > 100) {
      sethandleErrorExceded(percentage + Number(changeString));
      return;
    }
    if (percentage + defaultIncrease > 100 && changeString == '') {
      sethandleErrorExceded(percentage + defaultIncrease);
      return;
    }
    setPercentage(
      changeString.length > 0
        ? percentage + Number(changeString)
        : percentage + defaultIncrease
    );
  };

  const decrease = () => {
    sethandleErrorExceded(0);
    let changeString = changeQuantityRef.current.value;
    if (percentage + Number(changeString) < 0) {
      sethandleErrorExceded(percentage + Number(changeString));
      return;
    }
    if (percentage + defaultIncrease < 0 && changeString == '') {
      sethandleErrorExceded(percentage + defaultIncrease);
      return;
    }
    setPercentage(
      changeString.length > 0
        ? percentage - Number(changeString)
        : percentage - defaultDecrease
    );
  };

  const inputValidation = event => {
    setDisabled(
      !(
        /^\d+$/.test(event.target.value) &&
        /^[1-9]\d{0,2}(?:\,\d{1,3})?$/.test(event.target.value)
      ) && event.target.value !== ''
    );
  };

  return (
    <div className="container mt-5 " style={styleContainer}>
      <h3 className="my-5 ml-4" style={styleCenter}>
        <u style={styleTitle}>{title} </u> &nbsp;&nbsp;
        <img
          src="https://ii.ct-stc.com/2/logos/empresas/2016/09/20/70d01d6204f743329a09thumbnail.png"
          style={styleImg}
        />
      </h3>
      <ProgressBar percentage={percentage} />
      <Row className="mt-5">
        <Col style={styleCenter}>
          <InputGroup className="mb-3 ">
            <FormControl
              onChange={inputValidation}
              ref={changeQuantityRef}
              placeholder="Porcentage de cambio"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <Form.Control.Feedback type="invalid">
              Solo se acepta n&uacute;meros
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Row>
      <Buttons
        increase={increase}
        decrease={decrease}
        percentage={percentage}
        disabled={disabled}
      />
      {handleErrorExceeded > 100 && (
        <AlertExceeded
          message="No puedes superar el limite superior de 100"
          variant="danger"
        />
      )}
      {handleErrorExceeded < 0 && (
        <AlertExceeded
          message="No puedes superar el limite inferior de 0"
          variant="danger"
        />
      )}
      {percentage == 100 && (
        <AlertExceeded message="Llegaste al limite!" variant="success" />
      )}
      {percentage == 0 && (
        <AlertExceeded message="Llegaste al limite!" variant="warning" />
      )}
    </div>
  );
}
