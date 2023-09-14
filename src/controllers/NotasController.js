const NotasService = require('../services/NotasService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let notes = await NotasService.buscarTodos();

        for(let i in notes){
            json.result.push({
                id: notes[i].id,
                content: notes[i].content,
                data_e_hora: notes[i].created_at
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id; 
        let notes = await NotasService.buscarUm(id);

        if(notes){
            json.result = notes; 
        }

        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };
    
        let content = req.body.content;
    
        if (content) {
            try {
                
                let notasId = await NotasService.inserir(content);
    
                
                let created_at = new Date();
    
                
                json.result = {
                    id: notasId,
                    content,
                    created_at
                };
            } catch (error) {
                
                json.error = 'Erro ao inserir a nota: ' + error.message;
            }
        } else {
            json.error = 'Campos não enviados';
        }
    
        res.json(json);
    }
    ,
    alterar: async (req, res) => {
        let json = { error: '', result: {} };
    
        let id = req.params.id;
        let content = req.body.content;
        let created_at = req.body.created_at
    
        if (id && content)  {
            try {
                let created_at = new Date();
                
                await NotasService.alterar(id, content, created_at);
    
                
                json.result = {
                    id,
                    content,
                    created_at
                };
            } catch (error) {
                json.error = 'Erro ao realizar a alteração: ' + error.message;
            }
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }
    
    ,
    excluir: async (req, res) => {
        let json = { error: '', result: {} };
    
        try {
            const id = req.params.id;
            const resultado = await NotasService.excluir(id);
    
            if (resultado.affectedRows > 0) {
                json.result = { message: 'Nota excluída com sucesso' };
            } else {
                json.error = 'Nota não encontrada ou já foi excluída';
            }
        } catch (error) {
            json.error = 'Erro ao excluir a nota: ' + error.message;
        }
    
        res.json(json);
    },
    
}

