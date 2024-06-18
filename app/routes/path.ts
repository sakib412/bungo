export default function path(
  url: string,
  handler: (req: Request) => Response,
  name: string = 'routeName',
) {
  return {
    url,
    handler,
    name,
  };
}
