Event loop in javascript:

The Heap represents a large space of memory that contains all objects
The Stack keeps track of the currently executing function
The Callback Queue represents asynchrounous operations: I/O, timers, among others

Type of declarations: 
var: previously the most used declarations. They can only ve accessed from within the function. They can be re-declared.
let: recommended for variables. It is an improvement over var. Its value can be modified but not re-declared.
const: values cannot be changed nor re-declared. Useful to declare fixed values: tax %, pi.


Changes in this version

Added successfully loaded page and screen size log in console each time a new page is clicked

Added for while loop when making a reservation: 
-If email has not allowed values
-If phone is not a number
This prompts include a try-catch to prevent non numerical values to be added
A few validations of data type are added in the code

Now testimonies are shown on a loop: 
-Instead of using a loop I used the % function to show testimonies without errors. Please check testimonies.js



//Notes new lab
Added json docs for services and doctors
Added functions to manage doctors, appointments and the patient queue
Mixed html + json objects to dinamically show doctors in the website
Added search O(n) (each element is reviewed once in the worst case scenario)
Added sorting O(n log n) compares each element with its neighboor to check which one has more experience.