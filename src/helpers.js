import {PREFIXES} from './constants';

function checkPropertyCompatibility(defaultProperty, vendorProperty, methodName) {
  if (defaultProperty in document)
    return { key: defaultProperty, isPresent: true, methodName };
  for (let prefix of Object.keys(PREFIXES)) {
    const prefixValue = `${PREFIXES[prefix]}${vendorProperty}`;
    if (prefixValue in document) {
      return {
        key: prefixValue,
        isPresent: true,
        methodName: `${PREFIXES[prefix]}${methodName}`,
      };
    }
  }
  return { key: '', isPresent: true };
}

function getRandomColor(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function changeBackgroundColor(stickyElement, colorPalette) {
    return stickyElement.style.backgroundColor = getRandomColor(colorPalette);
 }

export { getRandomColor, checkPropertyCompatibility, changeBackgroundColor };
