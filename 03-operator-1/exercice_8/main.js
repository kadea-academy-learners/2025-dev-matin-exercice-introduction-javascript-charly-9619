
// Ecrivez votre code ici
let salaireMensuel=500;
let loyer=(salaireMensuel*30)/100;
let nourriture=(salaireMensuel*20)/100;
let  transport=(salaireMensuel*10)/100;
let  autresDepenses=50;
     autresDepenses+=25;
let  totalDepenses=loyer+nourriture+transport+autresDepenses;
let  reste=salaireMensuel - totalDepenses;
if(reste=>100){
console.log("Budget bien géré");
}
else {
  console.log("Attention, budget serré");
}
let loisirs=0.15*salaireMensuel;
totalDepenses+=loisirs;
reste=salaireMensuel - totalDepenses;

let pourcentageLoyer=loyer/salaireMensuel;
let pourcentageNourriture=nourriture/salaireMensuel;
let pourcentageTransport=transport/salaireMensuel;
let pourcentageAutresDepenses=autresDepenses/salaireMensuel;
let pourcentageLoisirs=loisirs/salaireMensuel;
console.log("le pourcentage du loyer vaut:", pourcentageLoyer, "le pourcentage de la nourriture vaut:", pourcentageNourriture , "le pourcentage du transport vaut:",pourcentageTransport,"le pourcentage des autres depenses:",pourcentageAutresDepenses,"le pourcentage des loisirs vaut :", pourcentageLoisirs);

salaireMensuel=(salaireMensuel*0.10)+salaireMensuel;
loyer=(salaireMensuel*30)/100;
nourriture=(salaireMensuel*20)/100;
transport=(salaireMensuel*10)/100;
 totalDepenses=loyer+nourriture+transport+autresDepenses;
 reste=salaireMensuel - totalDepenses;
  pourcentageLoyer=loyer/salaireMensuel;
 pourcentageNourriture=nourriture/salaireMensuel;
pourcentageTransport=transport/salaireMensuel;
pourcentageAutresDepenses=autresDepenses/salaireMensuel;
pourcentageLoisirs=loisirs/salaireMensuel;

if (totalDepenses>(90*salaireMensuel)/100){
  console.log("Dépenses trop élevées, réduisez vos charges");
  
}
// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
