Bun.serve({
  port: process.env.PORT || 8080,
  fetch(req) {
    console.log(`Request: ${req.url}`);
    return new Response('Hello World!');
  },
});
