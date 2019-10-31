// right now you have to manually insert this as a script snippet and manually run on a web page
let links = document.querySelectorAll('a');
links.forEach( (link) => { link.click(); } );