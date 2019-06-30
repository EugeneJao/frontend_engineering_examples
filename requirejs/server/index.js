const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
app.use(serve('./app'));
const HOST = 'localhost';
const PORT = 8888;
const server = app.listen(PORT, HOST, () => {
  const address = server.address()
  console.log('server running on address:', `http://${address.address}:${address.port}`);
});
