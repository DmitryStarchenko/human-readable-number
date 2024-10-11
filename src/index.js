module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];  
  const hundreds = ['hundred'];

  let numStr = number.toString();
  let result = ''

  if (numStr.length === 1) {
    result = units[number];
  } else if (numStr.length === 2) {
      if (parseInt(numStr[0]) === 1) {
        result = ten[parseInt(numStr[1])];  
      } else {
        result = (tens[parseInt(numStr[0]) - 2]) + (numStr[1] > 0 ? (' ' + units[parseInt(numStr[1])]) : '');
      }    
  } else {
    if (parseInt(numStr[1]) > 1) {
      result = (units[parseInt(numStr[0])]) + (' ' + hundreds[0]) + (' ' + tens[parseInt(numStr[1]) - 2]) + (numStr[2] > 0 ? (' ' + units[parseInt(numStr[2])]) : '');
    } else if (parseInt(numStr[1]) === 1) {
      result = (units[parseInt(numStr[0])]) + (' ' + hundreds[0]) + (' ' + ten[parseInt(numStr[2])]);
    } else if (parseInt(numStr[1]) === 0) {
      result = (units[parseInt(numStr[0])]) + (' ' + hundreds[0]) + (numStr[2] > 0 ? (' ' + units[parseInt(numStr[2])]) : '');
    }
  }
  return result
}
