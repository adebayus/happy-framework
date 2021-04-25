const routes = [
	{
		method: "GET",
		path: "/",
		handler: (request, h) => {
			return "hello Homepage";
		},
	},
	{
		method: "*",
		path: "/",
		handler: (request, h) => {
			return "Halaman tidak dapat diakses dengan method tersebut";
		},
	},
	{
		method: "GET",
		path: "/about",
		handler: (request, h) => {
			return "hello about";
		},
	},
	{
		method: "*",
		path: "/about",
		handler: (request, h) => {
			return "Halaman tidak dapat diakses dengan method tersebut";
		},
	},
	{
		method: postMessage,
		path: "/user",
		handler: (request, h) => {
			const response = h.response("success");
			response.type("text/plain");
			response.header("X-Custom", "some-value");
			return response;
		},
		// 	return h
		// 		.response("success")
		// 		.type("text/plain")
		// 		.header("X-Custom", "some-value");
		//
		// or
	},
	{
		method: "GET",
		path: "/users/{username?}",
		handler: (request, h) => {
			const { username = "stranger" } = request.params;
			const { lang } = request.query;
			if (lang === "id") {
				return `hi, ${username}`;
			}
			return `Hello, ${username}`;
		},
	},

	{
		method: "*",
		path: "/{any*}",
		handler: (request, h) => {
			return "Halaman tidak dapat diakses dengan method tersebut";
		},
	},
];

module.exports = routes;
