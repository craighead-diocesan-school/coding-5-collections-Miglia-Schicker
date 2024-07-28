// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
  teacher: 'Random middle-aged man'
}

function showSubject() {
  alert(subject.name)
  alert(subject.teacher)
}

function changeSubject() {
  let newName = 'Typing Skills'


  subject.name = newName
}

function changeTeacher(){
  let newTeacher = prompt ('What is the name of the new teacher?')
  subject.teacher = newTeacher
}