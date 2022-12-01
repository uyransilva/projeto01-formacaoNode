const express = require('express');
const bodyParser = require('body-parser');//disponibiliza para o backend o objeto body
const app = express();
const { connection } = require('./database/database')
const Pergunta  = require('./database/Pergunta');

//Database 
connection.authenticate().then(() => {
    console.log('Conexão com o BD realizada');
}).catch((error) => {
    console.log(error);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));   //recebe os dados do form e transforma em estrutura JS para uso
app.use(bodyParser.json()); //Permite a leitura de dados de form via JSON

app.get('/', ( req , res ) => {
    Pergunta.findAll({ raw : true }).then((perguntas) => { //SELECT * FROM PERGUNTAS
        res.render('home' , {
            perguntas
        });

    }); 
});

app.get('/perguntar',( req, res ) => {
    res.render("perguntar");
})

app.post('/salvarpergunta', ( req , res ) => {
    //recebe os dados do formulario a partir do "name" do campo
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    Pergunta.create({
        titulo,
        descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.listen(3000, () => {
    console.log('Server on');
})