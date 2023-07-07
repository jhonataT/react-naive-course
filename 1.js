const inverterString = (str = '') => {
    let newStr = '';

    for(let i = str.length - 1; i >= 0; i--) 
        newStr = newStr.concat(str[i]);

    return newStr.toString();
}

console.log("Call -> ", inverterString('jhonata'));