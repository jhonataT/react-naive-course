const encontrarPalavrasRepetidas = (str) => {
    let response = {};
    
    const arrayFromStr = str
        .toUpperCase()
        .split(' ');

    arrayFromStr.map( word => {
        const currentWordRepeat = arrayFromStr.filter(newWord => word === newWord).length || 1;
        if(currentWordRepeat > 1) {
            response = { ...response, [word]: currentWordRepeat };
        }
    });

    return response;
}

console.log("Output ->>", encontrarPalavrasRepetidas('Eu gosto de programar em JavaScript, eu também gosto de programar em Python'));