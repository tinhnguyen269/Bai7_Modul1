function convertmoney(){
    let amount = +document.getElementById("amount").value;
    let from = +document.getElementById("from").value;
    let to = +document.getElementById("to").value;

    let rate = from/to;
    let resoult = rate*amount;

    document.getElementById('resoult').innerText=resoult;
}