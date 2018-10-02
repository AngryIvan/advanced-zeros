module.exports = function getZerosCount(number, base) {
    let index = 1,
        zeros = 0,
        zerosArr = [];
    let power = 1;
    let result = [];
    let curNum = base;
    let probe = 2;

    while (curNum != 1) {
        if (curNum % probe != 0) {
            probe++;
        } else {
            curNum /= probe;
            result.push(probe);
        }
    }

    console.log(result);

    for (let i = 0; i < result.length; i++) {
        while (Math.floor(number / Math.pow(result[i], index)) != 0) {
            zeros += Math.floor(number / Math.pow(result[i], index));
            index++;
        }
        zerosArr.push(zeros);
        index = 1;
        zeros = 0;
    }

    console.log(zerosArr);

    let place = [];
    for (let i = 0; i < zerosArr.length; i++) {
        if (zerosArr[i] == zerosArr[i + 1]) {
            power++;
            place.push(i);
        }

    }

    zerosArr[place[0]] = Math.floor(zerosArr[place[0]] / power);

    let min = zerosArr[0];
    let max = min;
    for (i = 1; i < zerosArr.length; ++i) {
        if (zerosArr[i] > max) max = zerosArr[i];
        if (zerosArr[i] < min) min = zerosArr[i];
    }

    return min;
}