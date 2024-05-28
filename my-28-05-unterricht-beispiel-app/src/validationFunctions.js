// src/utils/validationFunctions.js

export const checkIfLengthGreater8 = (password) => password.length > 8;
export const checkIfHasCapitalLetter = (password) => /[A-Z]/.test(password);
