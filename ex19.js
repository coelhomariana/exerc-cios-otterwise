const checkSignal = (num) => {
    return num < 0 ? num + ' é negativo' : num + ' é positivo' 
}

console.log(checkSignal(1))
console.log(checkSignal(-1))