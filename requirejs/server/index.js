const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
app.use(serve('./app'));
const HOST = '0.0.0.0';
const PORT = 80;
const server = app.listen(PORT, HOST, () => {
  const address = server.address()
  console.log('server running on address:', `http://${address.address}:${address.port}`);
});
