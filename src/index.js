module.exports = function toReadable (number) {
    const numberMap = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
      };
    
      if (number < 0 || number > 999999999999999) {
        return 'Invalid number';
      }
    
      if (number < 20) {
        return numberMap[number.toString()];
      }
    
      if (number < 100) {
        const tens = Math.floor(number / 10) * 10;
        const units = number % 10;
        return numberMap[tens.toString()] + (units > 0 ? ' ' + numberMap[units.toString()] : '');
      }
    
      if (number < 1000) {
        const hundreds = Math.floor(number / 100);
        const remainder = number % 100;
    
        if (remainder === 0) {
          return numberMap[hundreds.toString()] + ' hundred';
        } else {
          return numberMap[hundreds.toString()] + ' hundred ' + toReadable(remainder);
        }
      }
    
      const thousands = Math.floor(number / 1000);
      const remainder = number % 1000;
    
      if (remainder === 0) {
        return toReadable(thousands) + ' thousand';
      } else {
        return toReadable(thousands) + ' thousand ' + toReadable(remainder);
      }
}
