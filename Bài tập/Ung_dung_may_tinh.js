
function add(){
    let number_1 = +document.getElementById("number1").value;
    let number_2 = +document.getElementById("number2").value;
    let cong = number_1 + number_2;
    document.getElementById("result").innerHTML = "ket qua =" + cong;
}
function sub(){
    let number_1 = +document.getElementById("number1").value;
    let number_2 = +document.getElementById("number2").value;
    let tru = number_1 - number_2;
    document.getElementById("result").innerHTML = "ket qua =" + tru;

}