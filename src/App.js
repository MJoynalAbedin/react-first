import React from 'react';
import './App.css';
import {Button, Navbar, Form, InputGroup, FormControl} from 'react-bootstrap';
import Chart from './components/Chart.js'

function App() {

    return (
    <div>
        {/* <h1 className="text-center">Hi I am Akib</h1>
        <Button variant='primary'>Primary</Button>
        <Navbar className="bg-light justify-content-between">
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit">Submit</Button>
          </Form>
        </Navbar> */}

        <Chart />
    </div>
  );
}

export default App;
