<script>
        function calculateScore(event) {
            event.preventDefault(); // Empêche l'envoi du formulaire

            // Obtenez les valeurs des réponses
            var q1 = document.getElementById('q1').value;
            var q2 = document.getElementById('q2').value;
			var q3 = document.getElementById('q3').value;
		    var q4 = document.getElementById('q4').value;
			var q5 = document.getElementById('q5').value;
		    var q6 = document.getElementById('q6').value;
			var q7 = document.getElementById('q7').value;
            // Initialisez le score
            var score = 0;

            // Vérifiez les réponses et attribuez des points
            if (q1 === 'mariah') {
                score++;
            }

            if (q2 === 'date4') {
                score++;
            }
			
			if (q3 === 'r1') {
                score++;
            }
			
			if (q4 === 'autre') {
                score++;
            }
			
			if (q5 === 'kfc') {
                score++;
            }
			
			if (q6 === 'poule') {
                score++;
            }
			
			if (q7 === 'mois') {
                score++;
            }

           
            // Affichez le score
            var resultElement = document.getElementById('result');
            resultElement.innerHTML = '<p>Score : ' + score + '</p>'
        }
</script>