import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import Container from "react-bootstrap/Container"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function SigninScreen() {
  const {search} = useLocation();
  const params = new URLSearchParams(search);
  const redirect = params.get('redirect')?params.get('redirect'):'/'
  return (
    <Container className='small-container'>
    <Helmet>
      <title>Sign in</title>
    </Helmet>
      <Form>
        <Form.Group className='mb-3' controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className='mb-3' controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required></Form.Control>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" >Sign In</Button>
        </div>
        <div className="mb-3">
          New Customer? {'  '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  )
}

export default SigninScreen
