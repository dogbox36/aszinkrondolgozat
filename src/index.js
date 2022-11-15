import './style.css';
document.addEventListener("DOMContentLoaded", ()=>{
let resoult;
    async function LoadData(){
        let response = await fetch('/quotes.json');
        resoult = await response.json();
    }

    LoadData();

    function printData(quotes){
        document.getElementById('quoteList').textContent = "";

        for (let q of quotes){
            let li = document.createElement('li');
            li.innerHTML = q.quote + " " + "<br>" + q.author + "<hr>";
            document.getElementById('quoteList').appendChild(li);
        }
        
    }


    function quotesload(quotesLista){
        let p = document.getElementById("all");

        quotesLista = quotesLista.sort((a, b) => a.author.localeCompare(b.author));

        for(let e of quotesLista){
            let li = document.createElement("li");
            li.innerHTML = e.author  + "\n\t-" + e.quote;

            p.appendChild(li);
        }
    }
    document.getElementById("adatok").addEventListener("click", ()=>{
        quotesload(resoult.quotes);



        LoadData();
    })

    
    document.getElementById("abc").addEventListener('click', async () => {
        let response = await fetch ('/quotes.json');
        let result = await response.json();
        let order = result.quotes.sort(function(a, b){
            let first = a.author.toUpperCase();
            let second = b.author.toUpperCase();

            if (first < second) {
                return -1;
              } else if (first > second) {
                return 1;
              } else {
                return 0;
              }
            });
            printData(order, "allList");
        });
});
