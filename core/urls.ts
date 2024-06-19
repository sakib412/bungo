function home(_req: Request) {
  return new Response('Hello, world!', {
    headers: {'content-type': 'text/plain'},
  });
}

type handler = (req: Request) => Response;
type namePath = string;

type Route = [handler, namePath?];

const Routes: Record<string, Route> = {
  '/': [home, 'home'],
  '/about': [
    function handler(req: Request) {
      return new Response(
        JSON.stringify({
          message: 'This is the about page.',
          requestPath: req.url,
        }),
        {
          headers: {'content-type': 'application/json'},
        },
      );
    },
  ],
};

export default Routes;
