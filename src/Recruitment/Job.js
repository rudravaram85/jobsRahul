      
import React from 'react';
import { Button } from 'reactstrap';

const Job = (props) => {
  return (
    <div>
      <Button color="primary">Recruiting</Button>{''}
      <Button color="primary">OnBoarding</Button>{''}
      <Button color="primary">HR</Button>{''}
      <Button color="primary">Contacts</Button>{''}
      <Button color="primary">Help</Button>{''}
      <Button color="primary">danger</Button>{''}
      <Button color="primary">link</Button>
    </div>
  );
}

export default Job;