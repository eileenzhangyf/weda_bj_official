import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import './Input.css';
export const InputFormTest = props => {
  return (
  <div className="input-form">
    {/*<Row>
      <Col sm="18" md={{ size: 16, offset: 3 }} className="text-center">
        <h2>立即咨询了解</h2>
      </Col>
    </Row>*/}
    <Row className="mt-4">
        <h2>立即咨询了解</h2>
      <Col sm="18" md={{ size: 16, offset: 3 }}>
        <Form>
          <FormGroup>
            {/*<Label for="person">Name</Label>*/}
            <Input name="person" placeholder="姓名" className="row"></Input>
          </FormGroup>
          <FormGroup>
            {/*<Label for="contact">Contact</Label>*/}
            <Input name="contact" placeholder="联系方式" className="row"></Input>
          </FormGroup>
          <FormGroup>
            {/*<Label for="message">Message</Label>*/}
            <Input name="message" placeholder="留言..." className="msg"></Input>
          </FormGroup>
          <Button className="submit">提交</Button>
        </Form>
      </Col>
    </Row>
  </div> 
  );
};