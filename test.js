function evenNumber(num) {
    let a= []
    for (let i=0; i<num.length; i++) {
        if (num[i] % 2 === 0) {
            a.push(num[i])
    }
    }return a  
    
}
num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log (evenNumber(num))