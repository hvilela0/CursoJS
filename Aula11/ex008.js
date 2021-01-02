let agora = new Date();

let hora = agora.getHours();
//let hora = 0;

console.log(`Agora ${(hora==1 || hora == 0)?'é':'são'}: ${hora} hora${(hora==1 || hora == 0)?'':'s'}`);
if (hora>=12 && hora <18) {
    console.log("Boa Tarde");
}
else if (hora>=18 && hora <24) {
    console.log("Boa Noite");
}
else{
    console.log("Bom dia!");
}
