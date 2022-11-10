export let nameSurnameControl = (check) => {
  let validRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{6,60}$/;
  return check.match(validRegex) ? true : false;
};
export let countryControl = (check) => {
  let validRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{4,40}$/;
  return check.match(validRegex) ? true : false;
};
export let cityControl = (check) => {
  let validRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{4,40}$/;
  return check.match(validRegex) ? true : false;
};
export let emailControl = (check) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return check.match(validRegex) ? true : false;
};
