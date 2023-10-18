const Tesseract = require('tesseract.js');
const {recoverAllFiles, write}= require('./fileHelper');

recoverAllFiles().forEach(async (file) => {
    const ocr = await Tesseract.recognize(file);
    write(file, ocr.data.text);
    //Tesseract.recognize( file, 'eng', { logger: m => console.log(m) }  ).then(({ data: { text } }) => {  console.log(text) })
})


