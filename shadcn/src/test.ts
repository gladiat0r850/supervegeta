let testResults = [20, 57, 89, 10, 100, 23, 44, 54]
let goodResults: number[] = []

for(let i = 0; i < testResults.length; i++){
    if(testResults[i] > 50){
        goodResults.push(testResults[i])
    }
}
console.log(goodResults)

enum Declarations {
    A = 'One'
}

const enumTest: Declarations = Declarations.A