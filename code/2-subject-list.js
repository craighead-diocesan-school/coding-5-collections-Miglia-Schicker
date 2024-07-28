// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Music',
  'Science'
]

function showSubjects() {
  alert(subjects)
}



function addSubject() {
  let newSubject = ''
  while (newSubject != 'stop'){
  newSubject = prompt ('What subject do you want to add to the array?')

  // add a new item to the end of the subjects array
  subjects.push(newSubject)
  }
}

function removeSubject() {
  let index = prompt ('Which index do you want to delete from the array? You can pick a number between 0 is English, 1 is Digital Technology, 2 is Music, 3 is Science, 4 is the subject you added.')

  // remove 1 item at the index position of the subjects array

  let arrayLength = subjects.length
  
  if (index >= 0 && index <= arrayLength){
    alert ('Ok')
  } else {
    alert('This is not a valid index. Try again with a number between 0 and 4.')
  }
  subjects.splice(index, 1)
}

