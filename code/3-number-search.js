// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
  14759,
  135475678,
  13456987655678954
]

function searchNumbers() {
  let searchTarget = prompt ('What number do you want to search the array for?')
  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true
      
    }
  } 
  

  alert(searchTarget + ' found: ' + searchResult)

  if (searchResult == searchTarget){
    alert('Well done. This number is in the array!')
  } else {
    alert("Uh Oh. We couldn't find this in the array")
  }
}
