
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
testButton.addEventListener("click", (e) => {
    counter += 1;
    id = counter % Object.keys(data).length;
    nameTestimony.innerHTML = data[id].name
    textTestimony.innerHTML = data[id].text
    e.preventDefault

})