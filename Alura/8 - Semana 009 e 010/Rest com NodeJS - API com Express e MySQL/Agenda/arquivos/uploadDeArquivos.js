const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg'];
    const tipo = path.extname(caminho);
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

    if(tipoEhValido){

        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callBackImagemCriada(false, novoCaminho));
        
    } else {

        // console.log('Erro! Tipo de imagem inválido!');
        const erro = 'Erro! tipo de imagem inválido!';
        callBackImagemCriada(erro);
    }


}