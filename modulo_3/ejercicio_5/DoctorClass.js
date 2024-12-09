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