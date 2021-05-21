function chooseCar (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Your car has been bought successfully!'
        case 'sedan':
        case 'motorcycle':
        case 'pickup truck':
            return "You sure you don't prefer this other model?"
        default:
            return "We don't sell that kind of car around here."
            //! This is a standard answer.
    }
}

console.log(chooseCar('hatch'));
console.log(chooseCar('motocicleta'));
console.log(chooseCar('sedan'));
console.log(chooseCar('pickup truck'));
console.log(chooseCar('jetski'));

