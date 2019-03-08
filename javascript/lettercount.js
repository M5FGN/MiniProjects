
function countLetters() {
    let word = frm_lettercount.in_word.value;
    let letters = word.length;
    document.getElementById('out_count').innerHTML = ("The number of letters in the word &#34;" + word + "&#34; is " + letters +".");
}