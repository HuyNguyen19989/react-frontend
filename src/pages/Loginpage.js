import React, {useState} from 'react';
import Example from '../components/Nav';
import Footer from '../components/Footer';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'


const Loginpage = (props) => {
    const [user,setUser] = useState('');

    const myUser = (event) => {
        setUser(event.target.value)
    }
    const mySubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('user', user);
        window.location.reload()
        
        
    }

    return(
        <div>
            <div>
              <Container>
                <Row>
                  <Col xl="12">
                    <Example>
               
                    </Example>
                  </Col>  
                </Row>   
              </Container>
            </div>
            <div className="au-main">
                <Container >
                <Form className="loginpage" onSubmit={mySubmit}>
      <Row form >
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">User Name</Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={myUser}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Email</Label>
        <Input type="email" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">Date of Birth</Label>
            <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Gender</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Remeber me</Label>
      </FormGroup>
    <Button type="submit">Sign up</Button>
    </Form>
                </Container>

            </div>
            <div>
                <Footer/>

            </div>
        </div>
    )

}

export default Loginpage;