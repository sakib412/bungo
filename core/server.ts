import Env from './env';
import {info, log} from './logger';
import Routes from './urls';

export default function server() {
  info('Starting server...');
  const server = Bun.serve({
    port: Env.get('PORT') || 8080,
    fetch(req) {
      const pathname = new URL(req.url).pathname;

      if (Routes[pathname]) {
        const res = Routes[pathname][0](req);
        info(
          `[${new Date().toLocaleString()}] "${req.method} ${pathname}" ${res.status} ${res.body?.values.length ?? 0}`,
        );
        return res;
      }

      log(`[${new Date().toLocaleString()}] "${req.method} ${pathname}" 404`);

      return new Response('404 Not found', {
        status: 404,
        headers: {'content-type': 'text/plain'},
      });
    },
  });

  info(`Server listening on ${server.url}`);
}
