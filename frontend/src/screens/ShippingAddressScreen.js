import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';

function ShippingAddressScreen() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  return (
    <div>
      <Helmet>
        <title>Shipping address</title>
      </Helmet>
      <h1 className="mb-3">Shipping address</h1>
      <Form>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control onChange={(e)=>setFullName(e.target.value)} value={fullName} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control onChange={(e)=>setAddress(e.target.value)} value={address} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(e)=>setCity(e.target.value)} value={city} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control onChange={(e)=>setPostalCode(e.target.value)} value={postalCode} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control onChange={(e)=>setCountry(e.target.value)} value={country} />
        </Form.Group>
        <div className="mt-3">
          <Button>Continue</Button>
        </div>
      </Form>
    </div>
  )
}

export default ShippingAddressScreen