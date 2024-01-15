let person = {
    Gender : 'Female',
    Age : 16,
    Name : 'Manal',
    Qualification : 'Matriculation',
    Contact : '02003030330',
}
// console.log(person)

//    ********* OPERATION ON OBJECT *********
/*            ACCESS PROPERTIES
      - one by one
      - loop through whole object
              UPDATE PROPERTIES
              DELETE PROPERTIES
               ADD PROPERTIESS
*/

// ACCESSING AN OBJECT'S PROPERTIES
// - one by one
// console.log(person.Gender)
// console.log(person['Age'])

// UPDATING AN OBJECT'S PROPERTIES
// person.Contact = '1234556666'
// person.Age = 21

// // DELETING AN OBJECT'S PROPERTIES
// delete person.Age

// // ADDING A NEW PROPERTY TO AN OBJECT'S PROPERTIES
// person.MaritalStatus = 'Unmarried'
// person.Nationality = 'Pakistani'

// - LOOPING AN OBJECT'S PROPERTIES
// *****- via for in loop*****
//  for(key in person){
//       console.log(`${key} : ${person[key]}`)
// }
// for(key in person){
//     if(key!='Qualification'){
//         console.log(`${key} : ${person[key]}`)
//     }
// }

let patient1 = {PatientID : 1, Ward : 'General', Doctor : 'Dr.Saima', Disease : 'Flu', Age : 50 }
let patient2 = {PatientID : 344, Ward : 'General', Doctor : 'Dr.Nimra', Disease : 'Diabetes', Age : 43 }
let patient3 = {PatientID : 5831, Ward : 'General', Doctor : 'Dr.Summaya', Disease : 'Cancer', Age : 27 }
let patient4 = {PatientID : 1125, Ward : 'General', Doctor : 'Dr.Saima', Disease : 'Flu', Age : 61 }
let patient5 = {PatientID : 45932, Ward : 'General', Doctor : 'Dr.Manal', Disease : 'AIDS', Age : 34 }
let patient6 = {PatientID : 8543, Ward : 'General', Doctor : 'Dr.Sohana', Disease : 'Hepatits', Age : 11 }
let patient7 = {PatientID : 7444, Ward : 'General', Doctor : 'Dr.Saima', Disease : 'Flu', Age : 46 }
let patient8 = {PatientID : 2009, Ward : 'General', Doctor : 'Dr.Javeria', Disease : 'Typhoid', Age : 16 }
let patient9 = {PatientID : 6661, Ward : 'General', Doctor : 'Dr.Manal', Disease : 'AIDS', Age : 32 }
let patient10 = {PatientID : 4141, Ward : 'General', Doctor : 'Dr.Manal', Disease : 'AIDS', Age : 7}

let patients = [patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9,patient10]
for (let a=0; a<=patients.length; a++){

      for (key in patients[a]){

        if (key=='Disease'){
    
           if (patients[a][key]=='Flu'){

            console.log(patients[a]['PatientID'])
           }
        }
      }
}

// doctor for aids patients
for (let a=0; a<=patients.length; a++){

    for (key in patients[a]){

        if (key=='Disease'){

            if (patients[a][key]=='AIDS'){

         console.log(patients[a]['Doctor'])
        }
         
        }
    }
}














