const express = require('express'); //chama o exprress//
const tarefaController = require('./controller/tarefaController'); //chama o tarefa controller//
const app = express(); //cria a constante express//
const port = 3000; //cria a porta//

app.set('view engine', 'ejs'); //setando a view engine, vai ser o pacote ejs//
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req , res)=>{res.send( '<h1>Tarefas</h1>' )})
app.get('/tarefas', tarefaController.getTarefas); //rota get, chama tarefaController//
app.post('/tarefa', tarefaController.addTarefa); //rota post//

app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});

