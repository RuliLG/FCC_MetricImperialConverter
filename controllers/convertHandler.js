/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.replace(/([^0-9\.\/]+)/, '');
    if (result.length === 0) return 1;
    
    result = result.split('/');
    if (result.length > 2) return null;
    
    return result.length === 2 ? parseFloat(result[0]) / parseFloat(result[1]) : parseFloat(result[0]);
  };
  
  this.getUnit = function(input) {
    var result;
    result = input.replace(/([^a-zA-Z]+)/, '');
    if (['gal', 'l', 'mi', 'km', 'lbs', 'kg'].indexOf(result.toLowerCase()) === -1) return null;
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if (!initUnit) return null;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        return 'l';
      case 'l':
        return 'gal';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      default:
        return null;
    }
  };

  this.spellOutUnit = function(unit) {
    if (!unit) return null;
    var result;
    switch (unit.toLowerCase()) {
      case 'gal':
        return 'gallons';
      case 'l':
        return 'liters';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometres';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
    }
    return null;
  };
  
  this.convert = function(initNum, initUnit) {
    if (initNum === null && initUnit === null) {
      return 'invalid number and unit';
    }else if (initNum === null) {
      return 'invalid number';
    }else if (initUnit === null) {
      return 'invalid unit';
    }
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
