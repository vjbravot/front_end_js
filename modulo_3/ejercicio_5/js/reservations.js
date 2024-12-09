let patients = ["Pedro","Juan", "Diego"]

let curry = (f) => {
    return function(a) {
        return function(b){
            return f(a,b)
        }
        
    }
}

function multiplication (a,b) {
    total = 0
    for(const [index, elem] of a.entries()){
        total += elem * b[index]   
    }
    return total
}

curry(multiplication)(prices)(appointments)


let avgWaitingTime = times => {reduce(add, 0, times)/times.lenght}

let currentSum = 0
function totalHours(appointments){
    if (appointments.lenght < 1){
        return currentSum
    }
    currentSum += appointments.pop()
    return totalHours(appointments)
    
}

const compose = (...fns) => (arg) =>{
    fns.reduceRight((acc, fn) => fn(acc),arg)
}

const percentageCut = (percent) => {
    return prices.map((price) => price * percent)
}

const addVat = () => {
    return prices.amp((price) => price*vat)
}
const reducedPrices = compose(addVat, percentageCut)


//Add reservation listener

reservationButton = document.getElementById("reservation-btn")

reservationButton.addEventListener('click', function(){alert('reservation confirmed');}, false);