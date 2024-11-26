data = [
    {   "id": 0,
        "name": "Dr. Cristobal Teuber",
        "title": "Director Médico",
        "experience": "5 years",
        "image": "img/team/director_1.png",
        "certifications": [
          {
            "name": "Médico Cirujano",
            "institution": "P. Universidad Católica de Chile"
          },
          {
            "name": "Radiología",
            "institution": "P. Universidad Católica de Chile"
          },
          {"name": "Abdominal Imaging",
        "institution": "Mallinckrodt Institute of Radiology"}
        ]
      },
    {   "id": 1,
        "name": "Dr. Carlos Villarroel",
        "title": "Director Médico",
        "experience": "5 years",
        "image": "img/team/director_2.png",
        "certifications": [
          {
            "name": "Médico Cirujano",
            "institution": "Universidad de La Frontera"
          },
          {
            "name": "Radiología",
            "institution": "Universidad de Chile"
          },
          {"name": "Diplomado Gestión en Imagenología",
        "institution": "Universidad de Chile"}
        ]
      },
      { "id": 2,
        "name": "Dr. Roberto Marileo",
        "title": "Médico",
        "experience": "5 years",
        "image": "img/team/medico_1.png",
        "certifications": [
          {
            "name": "Médico Cirujano",
            "institution": "P. Universidad Católica de Chile"
          },
          {
            "name": "Radiología",
            "institution": "P. Universidad Católica de Chile"
          },
          {"name": "  Especialización en Neurorradiología Diagnóstica",
        "institution": "Instituto de neurocirugía Dr. Asenjo"}
        ]
      },
      { "id": 3,
        "name": "Dr. Mario Cabezón",
        "title": "Médico",
        "experience": "5 years",
        "image": "img/team/medico_2.png",
        "certifications": [
          {
            "name": "Médico Cirujano",
            "institution": "P. Universidad Católica de Chile"
          },
          {
            "name": "Radiología",
            "institution": "P. Universidad Católica de Chile"
          },
          {
            "name": "Especialización en Radiología Musculoesquelética",
            "institution": "P. Universidad Católica de Chile"
          }
        ]
      },
      { "id": 4,
        "name": "Dra. Elizabeth Prado",
        "title": "Médico",
        "experience": "5 years",
        "image": "img/team/medico_3.png",
        "certifications": [
          {
            "name": "Médico Cirujano",
            "institution": "P. Universidad Católica de Chile"
          },
          {
            "name": "Radiología",
            "institution": "P. Universidad Católica de Chile"
          },
          {"name": "Abdominal Imaging",
        "institution": "Mallinckrodt Institute of Radiology"}
        ]
      },
      { "id": 5,
        "name": "Dr. Carlos Cisternas",
        "title": "Tecnólogo Médico Jefe",
        "experience": "5 years",
        "image": "img/team/tecnologo_1.png",
        "certifications": [
          {
            "name": "Tecnólogo Médico con Especialidad en Radiología y Física Médica",
            "institution": "Universidad de Tarapacá"
          },
          {
            "name": "Magister en Educación Superior",
            "institution": "Universidad Andrés Bello"
          },
          {"name": "  Diplomado en Resonancia Magnética",
        "institution": "Universidad Central"}
        ]
      },
      { "id": 6,
        "name": "Dr. Marcelo Borg",
        "title": "Tecnólogo Médico",
        "experience": "5 years",
        "image": "img/team/tecnologo_2.png",
        "certifications": [
          {
            "name": "Tecnólogo Médico con mención en Imagenología y Física Médica",
            "institution": "Universidad San Sebastián"
          }
        ]
      }
  ]

container = document.getElementById("doctors")

let htmlContent = ""; // Create a variable to store HTML content

data.forEach(element => {
    htmlContent += `<div class="card col-md-12 col-lg-6">
        <img src="${element.image}" class="member__img card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <h6 class="card-subtitle">${element.title}</h6>
            <ul class="list-group list-group-flush">`;

    // Nested loop to add certifications
    Object.entries(element.certifications).forEach(([index, cert]) => {
        htmlContent += `<li class="list-group-item">${cert.name} ${cert.institution}</li>`;
    });

    htmlContent += `</ul></div></div>`;
});

// Update innerHTML once after all loops
container.innerHTML = htmlContent;
