import React from 'react';
import styled from 'styled-components';

const Centered = styled.div`
  background: var(--ECG-dark-blue);
  max-width: 600px;
  margin: 0 auto;
  color: #FAFAFA;
  h1{
    color: #FAFAFA;
    padding: 1rem;
    margin: 0;
    text-align: center;
  }
  p{
    padding: 2rem;
    margin: 0;
  }
`


export default () => (
  
    <section>
      <Centered>
        <h1>A Centered Div</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quaerat? Quaerat reprehenderit illo tenetur id officiis corporis, culpa dicta est mollitia iure ad, blanditiis impedit ipsa sint aspernatur expedita minus.</p>
      </Centered>
    </section>
  )