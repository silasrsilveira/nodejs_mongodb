const mongoose = require("mongoose")

//Configurando o mongoose
    //mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    //useMongoClient: true
}).then(() =>  {
console.log("MongoDB Conectado...");

}).catch((err) => {
    console.log("Houve um erro ao se conectar ao MongoDB"+err);
})

//Definir Model - Usuarios 

const UsuariosSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})
// Collection
    mongoose.model('usuarios', UsuariosSchema )

const Silas = mongoose.model('usuarios')
//Criar User
new Silas({
    nome: "Paulo",
    sobrenome: "Silveira",
    email: "teste2@email.com",
    idade: 51,
    pais: "Brasil"
}).save().then(() =>{
    console.log("Usuario criado com Sucesso");
}).catch((err) => {
    console.log("Erro ao registrar o Usuario"+err);
})

// .save para salvar o usuario


