import app from "./src/app.js";
import connectToDB from "./src/config/db.js";
import { config } from "./src/config/config.js";

const startServer = async () => {
  try {
    await connectToDB();

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`.bgMagenta);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
