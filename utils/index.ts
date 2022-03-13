export const changeTildeFormat=(word:string):string=>{
    let newWord:string="";
    newWord=word
    .replaceAll("á","a")
    .replaceAll("é","e")
    .replaceAll("í","i")
    .replaceAll("ó","o")
    .replaceAll("ú","u");
    return newWord;
}