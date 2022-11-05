var el = document.getElementById("quotes");
var auth = document.getElementById("author");
var quotes = [{
    quote: 'Be yourself everyon else is already taken.',
    author: ' Oscar Wilde '
}, {
    quote: 'I m selfish impatient and a little insecure.I make mistakes,I am out of control and at times hard to handle.<br>But if you cant handle me at my worst,then you sure as hell dont deserve me at my best.',
    author: 'Marilyn Monroe '
}, {
    quote: 'Be who you are and say what you feel,<br>because those who mind dont matter and those who matter dont mind.',
    author: 'Bernard M. Baruch '
}, {
    quote: 'Youve gotta dance like theres nobody watching, Love like youll never be hurt,<br> Sing like theres nobody listening, And live like its heaven on earth.',
    author: '  William W. Purkey'
}, {
    quote: 'A room without books is like a body without a soul.',
    author: ' Marcus Tullius Cicero '
}, {
    quote: 'Dont walk in front of me… I may not follow Dont walk behind me… I may not lead Walk beside me… just be my friend.',
    author: ' Albert Camus '
}, {
    quote: 'It is better to be hated for what you are than to be loved for what you are not.',
    author: '  Andre Gide '
}];




function changequote() {
    var random = Math.floor(Math.random() * quotes.length);
    el.innerHTML = (quotes[random].quote);
    auth.innerHTML = (quotes[random].author);

}