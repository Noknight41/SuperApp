import data from "data";
import utils from "helpers/utils";

function easySayPassGenerator(length, hasUpper, hasLower) {
  let password = "";
  let charPool = [];

  if (hasUpper) {
    charPool = [...charPool, ...data.Upper];
  }
  if (hasLower) {
    charPool = [...charPool, ...data.Lower];
  }

  for (let i = 0; i < length; i += 1) {
    password = password.concat(
      charPool[utils.getRndInteger(0, charPool.length)]
    );
  }

  return password;
}

function allPassGenerator(length, hasUpper, hasLower, hasNumber, hasSpecial) {
  let password = "";
  let charPool = [];

  if (hasUpper) {
    charPool = [...charPool, ...data.Upper];
  }
  if (hasLower) {
    charPool = [...charPool, ...data.Lower];
  }
  if (hasNumber) {
    charPool = [...charPool, ...data.Number];
    charPool = [...charPool, ...data.Number];
    charPool = [...charPool, ...data.Number];
  }
  if (hasSpecial) {
    charPool = [...charPool, ...data.Special];
    charPool = [...charPool, ...data.Special];
    charPool = [...charPool, ...data.Special];
    charPool = [...charPool, ...data.Special];
  }

  for (let i = 0; i < length; i += 1) {
    password = password.concat(
      charPool[utils.getRndInteger(0, charPool.length)]
    );
  }

  return password;
}

export default { easySayPassGenerator, allPassGenerator };
