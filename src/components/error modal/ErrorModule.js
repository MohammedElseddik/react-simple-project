import React from 'react';

const ErrorModule = (props) => {
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
        <button>Cancel</button>
      </footer>
    </div>
  );
};

export default ErrorModule;
