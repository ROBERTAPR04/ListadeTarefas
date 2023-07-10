// class Tarefa { 
//     constructor(id, title, description) { 
//     this.id = id; 
//     this.title = title; 
//     this.description = description; 
//     } 
//     static listarTarefas(){
//         const Database=require('./DataBase');
//         let tarefas=Database.query("select*from tarefas");
//         return tarefas;
//         // return tarefas == undefined ? [] : tarefas;
//     }
//     }  //declaração simples de uma classe//
//     module.exports = Tarefa; //exportar recursos//
    
class Tarefa{
    constructor(id, titulo, descricao){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
    }

    static async listarTarefas(){
        const Database = require('./database');

        let tarefas = await Database.query("Select * from tarefas")
        return tarefas;
        
        // return tarefas == undefined ? [] : tarefas;
    }

    async save(){
        const Database = require('./database');

        let resp = await Database.query(`INSERT INTO tarefas (titulo, descricao) VALUES ('${this.titulo}', '${this.descricao}')`);
        console.log(resp);
        this.id = resp.insertId;
    }

    async deleteTarefa(id){
        const Database = require('./database');

        let resp = await Database.query(`DELETE FROM aula_to_do_list WHERE id_lista_tarefas = '${id}';`);
        console.log(resp);
    }
}

module.exports = Tarefa;