import './style.css';
document.addEventListener("DOMContentLoaded", ()=>{
let resoult;
    async function LoadData(){
        let response = await fetch('/quotes.json');
        resoult = await response.json();
    }

    LoadData();


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

        document.getElementById("abc").addEventListener("click", async () => {
        let data = await LoadData();
          let abc = data.quotes.sort(function (a, b) {
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
          printData(abc, "allList");
        });
});
