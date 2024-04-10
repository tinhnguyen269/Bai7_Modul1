// Bai 1
// let poinphysical = +prompt("Enter your point physical:");
// let pointchemstry = +prompt("Enter your point chemistry");
// let pointbiology = +prompt("Enter your point biology");
//
// let average = (pointbiology + pointchemstry +poinphysical)/3;
// let total = pointbiology + pointchemstry +poinphysical;
// document.write("Totalpoint is:",total);
// document.write("<br>");
// document.write("Average is :",average);

// // Bai 2
// function convert(){
//     let C = document.getElementById("C").value;
//     let F = ((C*9)/5)+32;
//      document.getElementById("result").innerHTML= "Result:" + F;
// }

// Bai3
function dientich(){
    const pi= 3.14;
    let R = document.getElementById("bankinh").value;
    let S = pi*R*R;
    let D = 2*pi*R;
    document.getElementById("result1").innerHTML = "Dien tich:" + S;
    document.getElementById("result2").innerHTML = "Chu vi:" + D;

}

