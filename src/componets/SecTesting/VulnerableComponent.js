import React, { useState } from 'react';

const VulnerableComponent = () => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const evaluateUserInput = () => {
    // This is a bad practice and a security risk!
    eval(userInput);
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={evaluateUserInput}>Evaluate</button>
    </div>
  );
};

export default VulnerableComponent;