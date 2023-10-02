const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/" && request.method === 'GET') return new Response("Home page!");
    if (url.pathname === "/users" && request.method === 'POST') return new Response("Users!");
    return new Response("404!");
  },
});

console.log(`Listening on localhost: ${server.port}`);
