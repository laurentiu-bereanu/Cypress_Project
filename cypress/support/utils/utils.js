export function createRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function createQACustom(selector) {
  return `[qa-custom="${selector}"]`;
}

export function createRandomNumber(length) {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return parseInt(result);
}

export function createRandomEmail(domain, length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + domain;
}

export function createRandomArrayOfStrings(lengthArray, lengthStrings) {
  var result = '';
  var result2 = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var j = 0; j < lengthArray; j++) {
    result = '';
    for (var i = 0; i < lengthStrings; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result2 += result + ', ';
  }
  return result2.slice(0, -2);
}

export function createBigDoubleNumber(number, lengthOfNumbersAfterDot) {
  var result = number + '.';
  for (var i = 0; i < lengthOfNumbersAfterDot; i++) {
    result += number;
  }
  return result;
}

export function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}

export function findObjectByTwoKeys(array, key, key2, value, value2) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value && array[i][key2] === value2) {
      return array[i];
    }
  }
  return null;
}
