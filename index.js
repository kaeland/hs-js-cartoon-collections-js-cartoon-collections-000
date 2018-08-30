function dwarfRollCall(dwarves) {
<<<<<<< HEAD
  // First check edgecase of there being no dwarves
  if (dwarves.length === 0) {
    return "There are no dwarves :("
  } else {
    
    var numDwarves = ""
    for (var i = 0; i < dwarves.length; i++) {
      numDwarves = numDwarves + `${i + 1}. ${dwarves[i]} `
    }
    
    return numDwarves
  }
=======
  
>>>>>>> b530b3e733ef597540b0c7bda240ca00ad669453
}

function summonCaptainPlanet(planeteerCalls){
  // First check edgecase of there being no calls
  if (planeteerCalls === 0) {
    // Because everyone knows you need all rings...especially "Heart"
    return "We can't call Captain Planet!"
  } else {
    
    // Changing each word in planeteerCalls to uppercase w/ an '!'
    for (var i = 0; i < planeteerCalls.length; i++) {
      planeteerCalls[i] = planeteerCalls[i].toUpperCase + '!'
    }
    
    return planeteerCalls
  }
}

function longPlaneteerCalls(words) {
  // First check edgecase of there being no words
  if (words.length === 0) {
    return "There are no words!"
  } else {
  
  // The function that will be used with the filter array method  
  function longerThanFourChars(currentCall) {
    return currentCall.length > 4
  }
  
  // Creates an array of any words that have more than 4 characters
  return words.filter(longerThanFourChars).length > 0 
  }
}

function findTheCheese (foods) {
  // First check edgecase of there being no food in the 'foods' array
  if (foods.length === 0) {
    return "There are no foods!"
  } else {
    
    // Now check for cheeses with the filter array method
    function cheeses(food) {
      return food === ("cheddar" || "gouda" || "camembert")
    }
    
    // cheese array will either be greater or less than zero
    var cheese = foods.filter(cheeses)
    
    if (cheese.length > 0) {
      // Return the first word in the 'cheese' array
      return cheese[0]
    } else {
      // No cheese exists in the cheese array
      return "no cheese!"
    }
  }
}
