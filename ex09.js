const isUnderage = (name, age) => {
    if (age < 18) {
        console.log(name + " é menor de idade.")
    } else {
        console.log(name + " é maior de idade.")
    }
}

isUnderage('Cecilia', 17)

isUnderage('Carla', 20)