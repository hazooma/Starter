import { config } from "dotenv";
import express from "express";
import loader from "./loaders";
import logger from "./loaders/logger";

config();

async function startServer() {
	const app = express();
	const port = process.env.PORT || 7777;

	await loader(app);

	app.listen(port, () => {
		logger.info(`
        ################################################
            🏁  Server listening on port: ${port} 🏁 
		################################################`);
	});
}

startServer();
