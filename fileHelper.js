const fs    = require('fs')
const path  = require('path')

const dirnameInput      = 'input';
const dirnameOutput     = 'output';
const pathFull          = path.join(__dirname, dirnameInput)


function recoverAllFiles() {
    let filesWithDir = [];
    fs.readdirSync(pathFull).forEach( file => {
        filesWithDir.push(`${dirnameInput}\\${file}`)
    });
    return filesWithDir;
}

function write(file, content) {
    const fileWithReplaceDir = file.replace(`${dirnameInput}\\`, '')   
    const fileNameFormatOutput = fileWithReplaceDir.substring(0, fileWithReplaceDir.indexOf('.')) + '_' + Date.now() + '_' + '.txt';
    fs.writeFileSync(`${dirnameOutput}\\${fileNameFormatOutput}`, content)
}

module.exports = {
    recoverAllFiles,
    write
};
