const Hapi = require("@hapi/hapi");

const init = async () => {
	const server = Hapi.server({
		port: 5000,
		host: "localhost",
	});

	server.route({
		method: "GET",
		path: "/",
		handler: (request, h) => {
			return "hello world";
		},
	});

	await server.start();
	console.log(`'server berjalan pada ${server.info.uri}'`);
};
init();
