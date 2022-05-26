# Ödev 3
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

- createServer metodunu kullanacağız.
- index, hakkimda ve iletisim sayfaları oluşturalım.
- Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
- port numarası olarak 5000'i kullanalım.

### index.js

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
     
    const url = req.url;

    if(url === '/'){
        res.writeHead( 200, {'Content-Type':'text/html'} );
        res.write('<h2>Ana Sayfa</h2>');
    }
    else if (url === '/hakkimda'){
        res.writeHead( 200, {'Content-Type':'text/html'} );
        res.write('<h2>Hakkimda</h2>');
    }
    else if(url === '/iletisim'){
        res.writeHead( 200, {'Content-Type':'text/html'});
        res.write('<h2>Iletisim</h2>');
    }else{
        res.writeHead( 404, {'Content-Type':'text/html'} );
        res.write('<h2>404 Not Found</h2>');
    }


     res.end();
})


server.listen(5000);

```