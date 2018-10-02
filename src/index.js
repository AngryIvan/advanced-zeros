module.exports = function getZerosCount(number, base) {
    let index = 1,
        zeros = 0,
        zerosArr = [];
    let power = [];
    let result = [];
    let probe = 2;

    //finding prime numbers
    while (base != 1) {
        if (base % probe != 0) {
            probe++;
        } else {
            base /= probe;
            result.push(probe);
        }
    }

    //counting zeros
    for (let i = 0; i < result.length; i++) {
        while (Math.floor(number / Math.pow(result[i], index)) != 0) {
            zeros += Math.floor(number / Math.pow(result[i], index));
            index++;
        }
        zerosArr.push(zeros);
        index = 1;
        zeros = 0;
    }


    //in case of repeating prime numbers 
    for (let i = 0; i < zerosArr.length; i++) {
        power[i] = 0;
        for (let j = 0; j < zerosArr.length; j++) {
            if (zerosArr[i] == zerosArr[j]) {
                power[i]++;

            }
        }
        zerosArr.splice(i, power[i], Math.floor(zerosArr[i]));

    }
    for (let i = 0; i < zerosArr.length; i++) {
        zerosArr[i] = Math.floor(zerosArr[i] / power[i]);
    }

    return Math.min.apply(null, zerosArr);
}