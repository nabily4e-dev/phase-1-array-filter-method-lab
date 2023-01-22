// بسم الله

function findMatching(drivers, name) {
	return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()))
}

function fuzzyMatch(drivers, name) {
	return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}

function matchName(drivers, name) {
	return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}



// // findMatching() function
// function findMatching(source, sought) {
//   return source.filter(
//     (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
//   );
// }
  
//   // fuzzyMatch() function
//  function fuzzyMatch(source, testString) {
//   return source.filter(
//     (possibleMatch) =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//   );
// }
  
//   // matchName() function
// function matchName(source, soughtName) {
//   return source.filter((record) => record.name === soughtName);
// }
