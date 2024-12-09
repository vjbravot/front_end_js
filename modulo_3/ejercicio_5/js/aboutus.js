//Simulating REST API
async function fetchDoctos(){
  console.log("calling rest API");
  const result = await callDoctorsApi();
  console.log(result)
}

function callDoctorsApi(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 5000);
  })
}

fetchDoctos();
//End simulation


//Real call

let dataDoctors;
let dataServices;
// Fetching data


fetch('./doctors.json')
  .then(response => {
    if (response.ok) {
      return response.json(); // Return the parsed JSON
    } else {
      throw new Error('Failed to fetch data'); // Handle non-OK responses
    }
  })
  .then(data => {
    dataDoctors = data; // Assign the resolved JSON data to `dataDoctors`
    modifyDoctorsHtml(Object.values(dataDoctors.doctors));
    console.log('Loaded data:', dataDoctors); // Log the loaded data
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });


fetch('./services.json')
.then(response => {
  if (response.ok){
    return response.json();
    } else {
      throw new Error ('Failed to fetch data');
    }
  })
  .then (data =>{
    dataServices = data;
    console.log('Loaded data:', dataServices);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//Combining both json files
let combinedData = {...dataDoctors, ...dataServices}

let filterDoctorsButton = document.getElementById("filterByName");

filterDoctorsButton.addEventListener("click", filterDoctors);

function filterDoctors(nameFilter) {
  var nameFilter = document.getElementById("nameInput")
  var filteredData = Object.values(dataDoctors.doctors).filter((data) => data.name.includes(nameFilter.value));
  console.log(filteredData)
  modifyDoctorsHtml(filteredData);
}


function modifyDoctorsHtml(data) {
  console.log(data)
  container = document.getElementById("doctors");
  let htmlContent = ""; // Create a variable to store HTML content
  data.forEach(element => {
    htmlContent += `<div class="card">
        <img src="${element.image}" class="member__img card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <h6 class="card-subtitle">${element.title}</h6>
            <ul class="list-group list-group-flush">`;
    // Nested loop to add certifications
    Object.entries(element.certifications).forEach(([index, cert]) => {
        htmlContent += `<li class="list-group-item">${cert.name} ${cert.institution}</li>`;
    })
    htmlContent += `</ul></div></div>`;
  })

    
    container.innerHTML = htmlContent;
}
// Update innerHTML once after all loops


//Cloning dataDoctors
let cloning = (data) => {
  return {... data}
}
//Modifying years of experience (Let's assume one year passed)
let addExp = (doctors) => {
  return doctors.forEach(element => {
  element.years_of_experience += 1;
})
}


//Adding doctors to array
let addDoctor = (newDoctor) => {
  doctorsList.push(newDoctor)
}

//Removing last doctor
let removeDoctor = () => {
  doctorsList.pop()
}

//Name Search
let searchDoctor = (name) =>{
  doctorsList.find(doc => doc.name === name)
}

// Sorting by experience
let doctorSorting = () => {
  doctorsList.sort((a,b) => b.years_of_experience - a.years_of_experience)
}

//Manage appointments
let appointments = [];
let addAppointments = (date) => {
  appointments.push(date)
}

let serveAppointments = () => {
  appointments.pop()
}

//Manage patients
let patients = [];
let addPatient = (patient) => {
  patients.push(patient)
}

let servePatient = () => {
  patients.shift()
}


//Implementing Dr Class

class Doctor {
  name;
  title;
  image;
  #years_of_experience;
  certifications;
  patients = 0;

  constructor(name, title, image, years_of_experience, certifications){
    this.name = name;
    this.title = title;
    this.image = image;
    this.#years_of_experience = years_of_experience;
    this.certifications = certifications;
  }

  set yearsOfExperience(years){
    this.#years_of_experience = years;
  }
  
  get yearsOfExperience(){
    return this.#years_of_experience
  }

  addPatient(){
    patients += 1;
  }

  presentYourself(){
    console.log(`I'm ${name}, I currently work as ${title} at Sinapsis, and I have ${years_of_experience} years of experience`)
  }
}

class Surgeon extends Doctor{
  specialty;
  numSurgeries = 0;

  constructor(name, title, image, years_of_experience, certifications, specialty){
    super(name, title, image, years_of_experience, certifications);
    this.specialty = specialty;
  }

  addPatient(){
    numSurgeries += 1;
  }

}
