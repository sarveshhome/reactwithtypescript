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
    setValues(
      '<label for="Addrestype">Address type&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Country</label><br /><select id="Addrestype" name="address type"><option value="of1">Office</option><option value="ho1">Home</option></select>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<select name="ddlCountry"><option value="IN">India</option><option value="USA">United state</option><option value="uk">United Kingdom</option></select>'
    );
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
