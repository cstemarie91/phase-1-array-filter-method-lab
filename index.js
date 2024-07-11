const drivers = [ {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

const element = drivers.find(function(driverSa) {
  return driverSa === `Sa`;

})


function findMatching(array, name) {
    const lowerCaseName = name.toLowerCase();
    return array.filter(element => element.toLowerCase() === lowerCaseName);
  }

function fuzzyMatch(array, element){
  //return array.filter(item => item.includes(element.length < 2));
  if (element.length < 2) {
    return []; }
  
return array.filter(item => item.startsWith(element));
}
 function matchName(array, object){
    
     
      return array.filter(driver => driver.name === object)
 
     };

const resultTwo = matchName(drivers, "Bobby");
console.log(resultTwo);
const result = fuzzyMatch(drivers, "Sa");
console.log(result);