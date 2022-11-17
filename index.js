const express = require('express');
const bodyParser = require('body-parser');//disponibiliza para o backend o objeto body
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));   //recebe os dados do form e transforma em estrutura JS para uso
app.use(bodyParser.json()); //Permite a leitura de dados de form via JSON

app.get('/', ( req , res ) => {
    
    res.render('home')
});

app.get('/perguntar',( req, res ) => {
    res.render("perguntar");
})

app.post('/salvarpergunta', ( req , res ) => {
    //recebe os dados do formulario a partir do "name" do campo
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    res.send(`Titulo ${titulo} e descrição:${descricao}`)
})

app.listen(3000, () => {
    console.log('Pau quebrando');
})