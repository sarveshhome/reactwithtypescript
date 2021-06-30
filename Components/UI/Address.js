import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Todo.module.css';
import AddressEnter from './AddressEnter.js';
import ReactHtmlParser from 'react-html-parser';
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
  const [values, setValues] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    setValues('<div><h1><input name="Name"  type="text"/></h1></div>');
    //setValues(<AddressEnter />);
  }, []);
  const addressHandler = event => {
    event.preventDefault();
    const final = [...componentcall, { id: count, data: values }];
    console.log(final);
    setComponentcall(final);
    setCount(count + 1);
  };
  const htmlDecode = input => {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  };
  return (
    <div>
      {componentcall &&
        componentcall.map(data => (
          <span key={data.id}>{ReactHtmlParser(data.data)}</span>
        ))}
      <Button variant="primary" onClick={addressHandler} type="submit">
        + New Address
      </Button>
    </div>
  );
};

export default Address;
