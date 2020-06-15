/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    let value = 0;
    let plusMinusSign = ""
    let power = 0
    
    for (let i = str.length - 1; i >= 0; i--) {
        //如果不是正負數也不是數字，跳過解析
        if (isNaN(parseInt(str[i], 10)) && str[i] !== "-" && str[i] !== "+") continue
        
        // 如果空格，跳過解析
        if (str[i] === " ") continue 
        
        // 如果是負號，先存起來
        if (str[i] === "-") {
            plusMinusSign = str[i]
        }

        // 如果是數字，計算數值
        if ( !isNaN(parseInt(str[i]), 10) ) {
            value += parseInt(str[i], 10) * 10 ** power
            power++
        }

    }
    
    return plusMinusSign === "-" ? value * -1 : value
};

export default myAtoi;