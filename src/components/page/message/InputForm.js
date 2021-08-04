import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Axios from "axios";
import './Input.css';

export const InputForm = () => {
  const initialInputState = { name: "", contact:"", message: "" };
  const [newMessage, setNewMessage] = useState(initialInputState);

  const { name, contact, message } = newMessage;

  const handleInputChange = e => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const sendMessage = e => {
    Axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: { name, contact, message },
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.data.msg === "suc") {
        console.log("Email has been sent");
        setNewMessage(initialInputState);
      } else {
        console.log("FAILURE");
      }
    });
  };

  return (
    <div>
     {/* <Row className="mt-4">
        <Col sm="18" md={{ size: 16, offset: 3 }} className="text-center mt-4">
          <h2>立即咨询了解</h2>
        </Col>
  </Row>*/}
      <Row className="mt-4">
          <h2>立即咨询了解</h2>
        <Col sm="12" md={{ size: 16, offset: 3 }}>
          <Form>
            <FormGroup>
             {/* <Label for="name">Name</Label>*/}
              <Input
                name="name"
                onChange={handleInputChange}
                value={name}
                placeholder="姓名"
                className="row"
              ></Input>
            </FormGroup>
            <FormGroup>
                {/*<Label for="contact">Contact</Label>*/}
                <Input
                  name="contact"
                  value={contact}
                  onChange={handleInputChange}
                  placeholder="联系方式"
                  className="row"
                ></Input>
            </FormGroup>
            <FormGroup>
              {/*<Label for="message">Message</Label>*/}
              <Input
                type="textarea"
                value={message}
                onChange={handleInputChange}
                style={{ height: 150 }}
                name="message"
                placeholder="留言..."
                className="msg"
              ></Input>
            </FormGroup>
            <Button onClick={sendMessage} className="submit">点击提交</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};