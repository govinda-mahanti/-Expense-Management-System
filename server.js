import express from "express"
import cors from "cors"
import morgan from "morgan";
import dotenv from "dotenv"
import colors from "colors"
import connectDb from "./config/connectDb"


// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});