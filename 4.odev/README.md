# Ödev 3
- employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
- Bu veriyi okuyalım. (READ)
- Bu veriyi güncelleyelim.
- Dosyayı silelim.


### main.js
 ```javascript
const fs = require('fs');

const createFile = (filename, name, salary) => {
    fs.writeFile(`${filename}.json`, `{"name": "${name}", "salary": "${salary}"}`, (err)  => {
        if(err) console.log(err);
        console.log(`${filename}.json dosyası oluşturuldu ve veriler içerisine başarıyla yazıldı.`);
    })
}

const readFile = (filename) => {
    fs.readFile(`${filename}.json`, 'utf-8', (err, data) => {
        if(err) console.log(err);
        console.log(`${filename}.json içerisindeki veriler başarıyla okundu`);
        console.log(data);
    })
}

const addData = (filename, newName, newSalary) => {
    fs.writeFile(`${filename}.json`, `{"name": "${newName}", "salary": "${newSalary}"}`, 'utf-8', (err) => {
        if(err) console.log(err);
        console.log('Veri başarıyla yazıldı.');
    })
}

const removeFile = (filename) => {
    fs.unlink(`${filename}.json`, (err) => {
        if(err) console.log(err);
        console.log('employees.json dosyası başarıla silindi !');
    })
}

const main = (filename, name, salary, newName, newSalary) => {
    createFile(filename, name, salary);
    readFile(filename);
    addData(filename, newName, newSalary);
    removeFile(filename);
}

main('employees', 'Employee Name 1', 3500, 'Employee Name 2', 6500)
 ```