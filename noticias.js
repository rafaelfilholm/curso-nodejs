const http = require("http");

let server = http.createServer((req, res) => {

	let category = req.url; 
	let title;

	if(category == '/technology'){
		title = "Notícias de Tecnologia";
	} else if(category == '/games'){
		title = "Notícias de jogos";
	} else {
		title = "Portal de notícias";
	}

	res.end(`<html><body>${title}</body></html>`);
});

const port = 3000;

server.listen(port, ()=> console.log(`Server started at port ${port}`));