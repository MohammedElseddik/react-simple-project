import React from 'react';
import Button from '../button/buttons';

const ErrorModule = (props) => {
  console.log(props);
  return (
    <div>
      <header>
        <h2>Invalid input</h2>
      </header>
      <main>
        <div>
          <p>{props.errorMessage}</p>
        </div>
      </main>
      <footer>
        <Button onClick={props.hideModal}>Cancel</Button>
      </footer>
    </div>
  );
};

export default ErrorModule;
