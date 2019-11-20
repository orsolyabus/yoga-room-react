import React from 'react';
import { Button, Form } from "react-bootstrap";

const SearchForm = () => (
  <Form action="" className="white-text">
    <Form.Group>
      <Form.Label className="d-block" >Class type</Form.Label>
      <Form.Check
        custom
        type='checkbox'
        id={`123`}
        label={`regular weekly`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`234`}
        label={`course`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`456`}
        label={`workshop`}
        inline
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="d-block">Style</Form.Label>
      <Form.Check
        custom
        type='checkbox'
        id={`567`}
        label={`Hatha`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`765`}
        label={`Astanga`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`543`}
        label={`Kundalini`}
        inline
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="d-block">Day</Form.Label>
      <Form.Check
        custom
        type='checkbox'
        id={`Mon`}
        label={`Mon`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`Tue`}
        label={`Tue`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`Wed`}
        label={`Wed`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`Thu`}
        label={`Thu`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`Fri`}
        label={`Fri`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`Sat`}
        label={`Sat`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`Sun`}
        label={`Sun`}
        inline
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="d-block">Time</Form.Label>
      <Form.Check
        custom
        type='checkbox'
        id={`567`}
        label={`morning`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`765`}
        label={`afternoon`}
        inline
      />
      <Form.Check
        custom
        type='checkbox'
        id={`543`}
        label={`evening`}
        inline
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>City</Form.Label>
      <Form.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label>Near me (kilometers)</Form.Label>
      <Form.Control
        disabled
        type="number"
        min="5"
        max="50"
        step="5"
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Filter
    </Button>
  </Form>
);

export default SearchForm;