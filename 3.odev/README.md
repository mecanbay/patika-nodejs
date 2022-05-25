# Ödev 3
- Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
- module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
- require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.


### main.js
 ```javascript
 //const circleCalc = require('./circle'); // 1.Kullanım
 const { circleArea, circleCircumference } = require('./circle')     // 2.Kullanım


 //circleCalc.circleArea(16); // 1. Kullanım
 // circleCalc.circleCircumference(16);  // 1. Kullanım


 circleArea(16); // 2.Kullanım
 circleCircumference(16); // 2.Kullanım

 ```


 ### circle.js
 ```javascript
const Pi = Math.PI;


const circleArea = (radius) => {
    let alan = Pi * radius ** 2;
    console.log(`Yarıçapı ${radius} m olan dairenin alanı ${alan.toFixed(2)} m²'dir.`);
}


const circleCircumference = (radius) => {
    let cevre = 2 * Pi * radius
    console.log(`Yarıçapı ${radius} m olan dairenin çevresi ${cevre.toFixed(2)} m²'dir.`);


}

module.exports = {
    circleArea,
    circleCircumference
}
 ```