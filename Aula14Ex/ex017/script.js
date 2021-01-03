
// exercício exibir tabuada em um "select" no HTML
let res = document.getElementById("seltab");

function calcular(){
    


    let numero = Number(document.getElementById("txtnum").value);
    

    if (numero == NaN) return;
    

    document.getElementById("txtexb").value ="";
    res.innerText = "";
    for(let i=1;i<=10;i++){
        res.innerHTML += `<option value=\"${i}\"> ${numero} x ${i} = ${(numero*i)}</option>`;
    }

}
function exibir(){
    k = document.getElementById("txtexb");
    if(res.options[res.selectedIndex] != undefined)
        k.value = res.options[res.selectedIndex].text;
}