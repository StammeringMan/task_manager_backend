import app from "./index.js";

const PORT = process.env.PORT || '8080';


app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})