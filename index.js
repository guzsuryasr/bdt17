var calculator = {
    penambahan : function(a,b) {
        return a+b;
    },
    pengurangan : function(a,b) {
        return a-b
    },
    perkalian : function(a,b) {
        return a*b
    },
    pembagian : function(a,b) {
        return a/b
    },
    modulus : function(a,b) {
        return a%b
    },
    kuadrat : function(a,b) {
        return Math.pow(a,b)
    },
    akar : function(a) {
        return Math.sqrt(a)

    },
    nilaiTengah : function(a,b) {
        return (a+b)/2
    },
    nilaiTotal: function(a) {
        //Argument berbentuk array
        // contoh : [2,4,5,6]
        var total = 0
        for (var nilai of a){
            total+=nilai
        }
        return total
    },
    nilaiRataRata : function(a) {
        //Argument berbentuk array
        // contoh : [2,4,5,6]
        var count = 0
        for(var nilai of a ){
            count+=nilai
        }
        return count/a.length
    },    
}

console.log(calculator.penambahan(10,2))
console.log(calculator.pengurangan(5,2))
console.log(calculator.perkalian(8,2))
console.log(calculator.pembagian(10,2))
console.log(calculator.modulus(7,2))
console.log(calculator.kuadrat(8,2))
console.log(calculator.akar(4))
console.log(calculator.nilaiTengah(8,10))

var array = [14,45,10]
console.log(calculator.nilaiTotal(array))
console.log(calculator.nilaiRataRata(array))