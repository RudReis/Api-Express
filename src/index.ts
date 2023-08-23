import Express from "express";
import Axios from "axios";


const app = Express();
app.use(Express.json());
app.use(Express.static("public"));
app.listen(3000);
app.get("/1", (req, res) => {
    res.send({tstest: "test"});
})
app.get("/home/:id", async (req, res) => {
    console.log(req.params.id);
    const cep = req.params.id
    const link = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    res.send(link.data);
})
app.post("/home", async (req, res) => {
    console.log(req.body);
    const cep = req.body.cep;
    const link = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    res.send(link.data);
})
app.get("/video", async (req, res) => {
    res.download("./public/movie.mp4");
})