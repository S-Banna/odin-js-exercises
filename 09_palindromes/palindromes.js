const palindromes = function (string) {
    const punctuationless = string
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .replace(/\s{2,}/g, " ");
    const ready = punctuationless.toLowerCase().replace(/\s/g, "");
    let compare = "";
    for (let i = ready.length - 1; i >= 0; i--) {
        compare += ready[i];
    }
    if (ready == compare) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
