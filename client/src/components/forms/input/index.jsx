import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormText, FormGroup, FormControl } from './styles';

const InputForm = (
  {
    nameField,
    id,
    name,
    inputRef,
    erros = '',
    type = 'text',
    accept = '*'
  }
) => {
  return (
    <FormGroup className="mb-3" as={Row}>
      <Form.Label column sm="2">{nameField}</Form.Label>
      <Col sm="10">
        <FormControl
          name={name}
          type={type}
          ref={inputRef}
          autoComplete={"off"}
          isInvalid={erros !== ""}
          accept={accept}
        />
        <FormText id={id}>
          {erros}
        </FormText>
      </Col>
    </FormGroup>
  );
}

export default InputForm;