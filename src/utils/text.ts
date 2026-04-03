export function parsePipeSeparatorString(takeAways: string) {

    const strArr = takeAways.split("|");

    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].trim();
    }

    return strArr;
};