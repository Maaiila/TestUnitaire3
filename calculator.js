let currentInput = "";

// Met à jour l'affichage de la calculatrice
function updateDisplay() {
    if (typeof document !== 'undefined') {
        document.getElementById('result').value = currentInput;
    }
}

// Ajoute une valeur numérique ou un point
function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

// Ajoute un opérateur si ce n'est pas déjà le dernier caractère
function appendOperator(operator) {
    if (!/[+\-*/]$/.test(currentInput)) {
        currentInput += operator;
        updateDisplay();
    }
}

// Réinitialise l'affichage
function clearResult() {
    currentInput = "";
    updateDisplay();
}

// Évalue l'expression actuelle
function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
    } catch (e) {
        currentInput = "Erreur";
    }
    updateDisplay();
}

// Fonction exportable pour Jest ou tests unitaires
function evaluateExpression(expression) {
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        throw new Error("Expression invalide");
    }
    return eval(expression);
}

// Export pour Node.js (ex : tests avec Jest)
if (typeof module !== 'undefined') {
    module.exports = {
        calculate: evaluateExpression
    };
}
