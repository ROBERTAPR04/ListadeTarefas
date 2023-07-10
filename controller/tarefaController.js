//const Tarefa = require('../models/tarefaModel'); //requisita os conteúdos do tarefaModel//
//let tarefas = [];//array vazio//
//async function getTarefas(req, res) { //recebe dois parametros de entrada a requesição e a resposta//
//tarefas = await Tarefa.listarTarefas();
///res.render('tarefas', { tarefas })
///} 
//function addTarefa(req, res) {//recebe o objeto de entrada e resposta//
//const { title } = req.body; //nome da requisição e vai receber os valores dela//

//const tarefa = new Tarefa(Date.now(), title, false); //recebe a data que foi colocada a tarefa e o nome//
//tarefas.push(tarefa); //puxa as tarefas para o array//
//res.redirect('/tarefas'); //redireciona para a rota tarefas//
//} 

//module.exports = { getTarefas, addTarefa, };//arquivo de funções//
const Tarefa = require('../models/tarefaModel'); 

let tarefas = [];

async function getTarefas(req, res) { 
    tarefas = await Tarefa.listarTarefas();

    res.render('tarefas', { tarefas });
} 

function addTarefa(req, res) { 

    const { title } = req.body; 


    const tarefa = new Tarefa(null, title, null);
    tarefa.save();
    res.redirect('/tarefas'); 
} 

function deleteTarefa(req, res){
    const id = req.params.id;

    
}

module.exports = { getTarefas, addTarefa, deleteTarefa };