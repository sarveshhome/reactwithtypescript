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
  const [count, setCount] = useState(0);
  useEffect(() => {
    setValues('2');
  }, []);
  const addressHandler = event => {
    event.preventDefault();
    const final = [...componentcall, { id: count, data: values }];
    console.log(final);
    setComponentcall(final);
    setCount(count + 1);
  };

  return (
    <div>
      {componentcall &&
        componentcall.map(data => <span key={data.id}> {data.todovalue}</span>)}
      <Button variant="primary" onClick={addressHandler} type="submit">
        + New Address
      </Button>
    </div>
  );
};

export default Address;
