import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Todo.module.css';
import AddressEnter from './AddressEnter.js';
import {
  Container,
  Form,
  Button,
  Row,
  ListGroup,
  Col,
  FormGroup
} from 'react-bootstrap';

const Address = () => {
  const [contaddres, setCountaddress] = useState();
  const [componentcall, setComponentcall] = useState([]);
  const [values, setValues] = useState('');
  useEffect(() => {
    setValues('<div>hello</div>');
  }, []);
  const addressHandler = event => {
    const final = [...componentcall, { data: values }];
    setComponentcall(final);
  };

  return (
    <div>
      {componentcall}
      <Button variant="primary" onClick={addressHandler} type="submit">
        + New Address
      </Button>
    </div>
  );
};

export default Address;
