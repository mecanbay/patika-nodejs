# Ödev 1
 Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.


 ```javascript
 const Pi = Math.PI;
const arg = process.argv;

arg.forEach( (argument,index) => {
    if(argument == '-y'){  // y = yaricap
        let alan = Pi * arg[index + 1] ** 2
        console.log(`Yarıçapı ${arg[index + 1]} m olan dairenin alanı ${alan.toFixed(2)} m²'dir`);
    }
    else if (argument == '-h'){
        console.log(`
Kullanım Kılavuzu:
    -h [argüman almaz]
    	Yardım almak için kullanılır.
    -y [integer]
    	Dairenin yarı çapını belirtmek için kullanılır.
        `);
    }
    
    
});
 ```