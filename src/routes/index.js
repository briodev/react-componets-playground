import React from 'react';
import { Router } from "@reach/router"
import Home from '../components/Home';
import About from '../components/About';
import TestRoute from '../components/TestRoute';
import CenteredDiv from '../components/CenteredDiv';
import FormSample from '../components/form-sample/form-sample'
import ReactStrapForm from '../components/reactstrap-form/form'
import ReactFinalForm from '../components/final-form-example/form'

export default () => (
  <Router>
    {/* <Home path="/" exact component={Home} />
    <About path="/about" component={About} />
    <TestRoute path="/test-route" component={TestRoute} />
    <CenteredDiv path="centered-div" component={CenteredDiv} /> */}
    <Home path="/" />
    <About path="/about" />
    <TestRoute path="/test-route"  />
    <CenteredDiv path="centered-div"  />
    <FormSample path="form-sample"  />
    <ReactStrapForm path="reactstrap-form"  />
    <ReactFinalForm path="react-final-form"  />
  </Router>
)