/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    let value = 0;

    for (let i = 0; i <= str.length; i++) {
        if ( !isNaN(parseInt(str[i]), 10) ) {
            value += parseInt(str[i], 10) * 10 ** ( str.length - i - 1)
        }
    }
    
    return value
};

export default myAtoi;