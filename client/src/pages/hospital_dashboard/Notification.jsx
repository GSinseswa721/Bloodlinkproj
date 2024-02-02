import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const NotificationApp = ({ variant, sender, message }) => {
  const [show, setShow] = useState(true);

  return (
    <Alert
      show={show}
      variant={variant}
      onClose={() => setShow(false)}
      dismissible
    >
      <strong>{sender}</strong>: {message}
    </Alert>
  );
};
const Notifications = () => {
  return (
    <>
    <div>
      <h1 className='fs-5'>Recent</h1>
      <NotificationApp variant="success" sender="Linda" message="This is a success notification" />
      <NotificationApp variant="danger" sender="System" message="This is an error notification" />
      <NotificationApp variant="primary" sender="Apple" message="This is an apple notification" />
      <NotificationApp variant="dark" sender="Horror" message="This is a horror notification" />
    </div>
    </>
  )
}

export default Notifications