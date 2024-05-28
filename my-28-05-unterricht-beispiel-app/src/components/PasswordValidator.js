// src/components/PasswordValidator.js
import React, { useState } from 'react';
import { checkIfLengthGreater8, checkIfHasCapitalLetter } from '../validationFunctions';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const validatePassword = () => {
    if (!checkIfLengthGreater8(password)) {
      setValidationMessage('Not OK: Password must be greater than 8 characters.');
    } else if (!checkIfHasCapitalLetter(password)) {
      setValidationMessage('Not OK: Password must include at least one capital letter.');
    } else {
      setValidationMessage('OK');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={validatePassword}>Validate Password</button>
      <div data-testid="validation-message">{validationMessage}</div>
    </div>
  );
};

export default PasswordValidator;
