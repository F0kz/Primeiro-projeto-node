const { error } = require('console')
const fs = require('fs')
const path = require('path')

/*
//Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if(error) {
        return console.log("Error", error);
    }
    console.log('pasta criada com sucesso!');
})
*/

// Criar um arquivo
fs.writeFile(path.join(__dirname, "/test", 'test.txt'), 'hello node!', (error) => {
    if(error) {
        return console.log('Error', error)
    }
    console.log('arquivo criado com sucesso!')
})