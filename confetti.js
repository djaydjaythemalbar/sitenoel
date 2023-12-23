<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Effet de Confettis</title>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
</head>
<body>

    <h1>Bienvenue sur notre site!</h1>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Configuration des confettis
            const confettiSettings = { target: 'my-canvas' };
            const confetti = new ConfettiGenerator(confettiSettings);

            // Activation des confettis après un délai
            setTimeout(function() {
                confetti.render();
            }, 2000); // Délai en millisecondes (ici, 2000 ms ou 2 secondes)
        });
    </script>

    <canvas id="my-canvas"></canvas>

</body>
</html>
