const customExpress = require('./config/customExpress')
const conexao = require('./infrastrutura/database/conexao')
const Tabelas = require('./infrastrutura/database/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Conectado com sucesso')
    
        Tabelas.init(conexao)
        const app = customExpress()

        app.listen(2000, () => console.log('servidor rodando na porta 2000'))
    
    }   
})



 