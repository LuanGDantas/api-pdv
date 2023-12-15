const { readFile } = require('fs/promises');
const { compile } = require('handlebars');

const compilarTemplateHtml = async (caminhaArquivoHtml, variaveis) => {
    const bufferHtml = await readFile(caminhaArquivoHtml);
    const compilacaoTemplate = compile(bufferHtml.toString());
    return compilacaoTemplate(variaveis);
};

module.exports = compilarTemplateHtml;
