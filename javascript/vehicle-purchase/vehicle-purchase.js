
/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {

  const veihiclesThatNeedLicence = ['car','truck'];
  return veihiclesThatNeedLicence.includes(kind);
    
  
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const arrayOfVehicles = [option1,option2];
  arrayOfVehicles.sort();
  return arrayOfVehicles[0] + " is clearly the better choice.";
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let percentageOfDiscount = 0;

  if(age < 3){
    percentageOfDiscount = 20;
  }else if(age > 10){
    percentageOfDiscount = 50;
  }else{
    percentageOfDiscount = 30;
  }

  return originalPrice - ((originalPrice / 100) * percentageOfDiscount)
  
}
