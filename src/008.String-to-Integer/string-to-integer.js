/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    let value = 0;
    let plusMinusSign = ""

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === "+" || str[i] === "-") {
            plusMinusSign = str[i]
        }

        if ( !isNaN(parseInt(str[i]), 10) ) {
            value += parseInt(str[i], 10) * 10 ** ( str.length - i - 1)
        }

    }
    
    return plusMinusSign === "-" ? value * -1 : value
};

export default myAtoi;