let salaireMensuel=500;
let loyer=(salaireMensuel*30)/100;
let nourriture=(salaireMensuel*20)/100;
let  transport=(salaireMensuel*10)/100;
let  autresDepenses=50;
     autresDepenses+=25;
let  totalDepenses=loyer+nourriture+transport+autresDepenses;
let  reste=salaireMensuel - totalDepenses;
// Ecrivez votre code ici

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
