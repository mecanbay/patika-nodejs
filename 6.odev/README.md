# # Ödev 3
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

- koa paketini indirelim.
- index, hakkimda ve iletisim sayfaları oluşturalım.
- Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
- port numarası olarak 3000'i kullanalım.


## index.js
```javascript
const koa = require('koa');
const koa_router = require('koa-router');
const app = new koa();
const router = new koa_router();  



router.get('anasayfa', '/', (ctx) => {
    ctx.body = '<h1>Ana Sayfa<h1>'
})

router.get('hakkimda', '/hakkimda', (ctx) => {
    ctx.body = '<h1>Hakkımda<h1>'
})

router.get('iletisim', '/iletisim', (ctx) => {
    ctx.body = '<h1>İletişim<h1>'
})


app.use(router.routes());
app.listen(3000, () => {
    console.log("Sunucu 3000 portunda ayağa kalktı...");
});

```

## package.json

```json
{
  "dependencies": {
    "koa": "^2.13.4",
    "koa-router": "^10.1.1",
  }
}
```