const result = document.getElementById('result');
const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');  
const reset = document.getElementById('reset');
// On récupère tous les élelments dont on a besoin dans l'html 


// Lorsque l'utilisateur clique sur le bouton "Générer un mot de passe"
generate.addEventListener('click', () => {
  const lengthValue = +length.value; // Récupère la longueur choisie dans le min et max dans le HTML 
  const options = { // Récupère les options sélectionnées par l'utilisateur grâce au checked dans le html 
    upper: uppercase.checked,
    lower: lowercase.checked,
    number: numbers.checked,
    symbol: symbols.checked
  };

  // le résultat sera égal au mdp généré dans cet EventListener 
  result.innerText = generatePassword(options, lengthValue);
}); 

// Fonction pour générer le mot de passe
function generatePassword(options, length) {
  let charSet = ''; // zone vide où on va ajouter les caractères possibles

  // Si l'utilisateur veut des lettres majuscules,minuscules,symboles ou chiffres récupérer dans la fonction options on les ajoute à charSet 
  if (options.upper) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.lower) charSet += 'abcdefghijklmnopqrstuvwxyz';
  if (options.number) charSet += '0123456789';
  if (options.symbol) charSet += '!@#$%^&*(){}[]=<>/,.';

  let password = ''; // zone vide où le mot de passe sera mit

  // Crée le mot de passe caractère par caractère
  for (let i = 0; i < length; i++) { // on part de l'index zéro à la position sélectionée dans le html qui correspond a la valeur maximum 
    password += charSet[Math.floor(Math.random() * charSet.length)]; // Sélectionne un caractère aléatoire grâce au math.random en respectant la longueur définie du mot de passe 
  } 

  return password; // Retourne le mot de passe généré
}


// Lorsque l'utilisateur clique sur le bouton "Copier dans le presse-papier"
clipboard.addEventListener('click', () => {
  // Copie le mot de passe dans le presse-papier grâce à la fonction navigator.clipboard.writeText
  navigator.clipboard.writeText(result.innerText);

  // Affiche un message de confirmation
  alert('Mot de passe copié dans le presse-papier');
});
  
  reset.addEventListener('click', () => {
    // pour réinitailiser le mot de passe 
    result.innerText = '';

  });
  