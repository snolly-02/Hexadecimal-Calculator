export function isValidHex(input) {
  return /^[0-9A-F]{1,2}$/i.test(input);
}

export function addHex(a, b) {
  const result = parseInt(a, 16) + parseInt(b, 16);
  return result.toString(16).toUpperCase().padStart(4, '0');
}


export function subtractHex(a, b) {
  const result = parseInt(a, 16) - parseInt(b, 16);
  return (result < 0 ? 0 : result).toString(16).toUpperCase().padStart(4, '0');
}

export function multiplyHex(a, b) {
  const result = parseInt(a, 16) * parseInt(b, 16);
  return result.toString(16).toUpperCase().padStart(4, '0');
}

export function divideHex(a, b) {
  const divisor = parseInt(b, 16);
  if (divisor === 0) throw new Error("Division by zero");
  const result = Math.floor(parseInt(a, 16) / divisor);
  return result.toString(16).toUpperCase().padStart(4, '0');
}
