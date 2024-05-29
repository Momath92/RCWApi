<!DOCTYPE html>
<html>
<head>
    <title>Formulaire de Produit</title>
</head>
<body>
    <form action="http://localhost:3000/calculate" method="post">
        <label for="product">Produit:</label>
        <input type="text" id="product" name="product"><br><br>
        <label for="amount">Montant:</label>
        <input type="number" id="amount" name="amount"><br><br>
        <input type="submit" value="Calculer">
    </form>
</body>
</html>
