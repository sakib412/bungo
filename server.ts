Bun.serve({
  port: process.env.PORT || 8080,
  fetch(req) {
    console.log(`Server run on ${req.url}`);
    return new Response('Hello World!');
  },
});
