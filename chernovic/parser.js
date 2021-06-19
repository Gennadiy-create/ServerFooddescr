window. addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');
    let trxtNodes = [];

    function recursy (element) {
        element.childNodes.forEach(node => {

            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header:node.nodeName,
                    content: node.textContent
                };
                textNodes.push(obj);
            } else{
                recursy(node);
            }
        });
    }

    recursy(body);
   
    fetch('fetch('https://jsonplaceholder.typicode.com/posts', {
               method:'POST',
               header: {
                   'Content-Type': 'application/json'
               },
               bidy: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log(json));

}); 