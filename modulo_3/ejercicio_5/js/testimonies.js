fetch('./testimonies.json')
  .then(response => {
    if (response.ok) {
      return response.json(); // Return the parsed JSON
    } else {
      throw new Error('Failed to fetch data'); // Handle non-OK responses
    }
  })
  .then(data => {
    dataTestimonies = data; // Assign the resolved JSON data to `dataDoctors`
    modifyTestimoniesHtml(Object.values(dataDoctors.doctors));
    console.log('Loaded data:', dataDoctors); // Log the loaded data
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });
var data = [{"name": "María G.",
"text": "La atención en el Centro Sinapsis fue excepcional. Desde mi primera consulta hasta la rehabilitación, me sentí apoyada en cada paso. Gracias a su equipo, hoy disfruto de una vida más saludable."},
{"name": "José L.", 
"text": "No puedo agradecer lo suficiente al personal del hospital. Su profesionalismo y dedicación me dieron la confianza que necesitaba durante mi tratamiento. Me siento como nuevo y listo para seguir adelante."},
{"name": "Ana R.",
"text": "Tuve una experiencia increíble. El equipo médico no solo es competente, sino también muy empático. Me ayudaron a entender mi condición y a tomar decisiones informadas sobre mi salud."},
{"name": "Carlos T.",
"text": "Sinapsis superó mis expectativas. La atención personalizada y el seguimiento constante hicieron toda la diferencia en mi recuperación. ¡Altamente recomendado!"}
]

testButton = document.getElementById("next_testimony")
nameTestimony = document.getElementById("testName")
textTestimony = document.getElementById("testText")
counter = 0
nameTestimony.innerHTML = data[data.length - 1].name
textTestimony.innerHTML = data[data.length - 1].text

testButton.addEventListener("click", (e) => {
    counter += 1;
    id = counter % Object.keys(data).length;
    nameTestimony.innerHTML = data[id].name
    textTestimony.innerHTML = data[id].text
    e.preventDefault

})