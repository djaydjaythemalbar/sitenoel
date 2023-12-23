// script.js
function envoyerFormulaire() {
    var formulaire = document.getElementById("funForm");
    var formData = new FormData(formulaire);

    // Afficher les informations dans une boîte d'alerte
    var message = "Réponses du questionnaire :\n";
    formData.forEach(function(value, key){
        message += key + ': ' + value + '\n';
    });

    alert(message);
}
