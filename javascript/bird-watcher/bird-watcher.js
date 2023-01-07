
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for(let i =0; i < birdsPerDay.length; i++ ){
    totalBirds += birdsPerDay[i] 
  }
  return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {

  let totalOfBirdsInAWeek = 0;
  const daysInAWeek = 7;
  
  const numbersToJump = (week-1) * daysInAWeek;

  for(let i = 0; i < daysInAWeek; i++){
     totalOfBirdsInAWeek += birdsPerDay[i+numbersToJump];
  }
  return totalOfBirdsInAWeek;
  
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length; i++){
    if((i % 2) == 0){
      birdsPerDay[i] += 1; 
    } 
  }
  return birdsPerDay
}
