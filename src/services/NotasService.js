const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM notes', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM notes WHERE id = ?', [id], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ 
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (content)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO notes (content) VALUES (?)',
                [content],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertId); 
                }
            );
        });
    },
    alterar: (id, content) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE notes SET content = ? WHERE id = ?',
                [content,  id], 
                (error, results) => {
                    if (error) {
                        rejeitado(error);
                    } else {
                        aceito(results);
                    }
                }
            );
        });
    }
    ,

    excluir: (id)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM notes WHERE id = ?',[id], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};

