function convertRgbToHex() {
  // Get input value
  const rgbInput = document.getElementById('rgbInput').value;

  // Check if the input is in a valid format
  const rgbRegex = /^(\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})$/;
  const match = rgbInput.match(rgbRegex);

  if (!match) {
    alert('Please enter valid RGB values (e.g., 255, 0, 0).');
    return;
  }

  // Convert RGB to Hex
  const hexValue = rgbToHex(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));

  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Hex color: ${hexValue}`;
}

function rgbToHex(r, g, b) {
  // Ensure that values are within the valid range (0-255)
  const clamp = (value) => Math.max(0, Math.min(255, value));
  r = clamp(r);
  g = clamp(g);
  b = clamp(b);

  // Convert to hex format
  const toHex = (value) => {
    const hex = value.toString(16);
    // Ensure two characters by adding a leading zero if needed
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hexString = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return hexString.toUpperCase();
}
