/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    let power = 0
    let value = 0;
    let newStr = str.trim()
    let plusMinusSign = "" 

    // 確認第一個字元是不是正負號
    if (newStr[0] === "-" || newStr[0] === "+") {
        plusMinusSign = newStr[0]
        newStr = newStr.slice(1)
    }
    
    for (let i = newStr.length - 1; i >= 0; i--) {

        //如果遇到非數字或空格，重新計算
        if (isNaN(parseInt(newStr[i], 10)) || newStr[i] === " ") {
            value = 0
            power = 0
        }

        // 如果是數字，計算數值
        if ( !isNaN(parseInt(newStr[i]), 10) ) {
            value += parseInt(newStr[i], 10) * 10 ** power
            power++                
        }
    }
    
    value = plusMinusSign === "-" ? value * -1 : value

    if (value > 2 ** 31 - 1) return 2 ** 31 - 1
    if (value <  2 ** 31 * -1) return  2 ** 31 * -1
    return value  
};

export default myAtoi;