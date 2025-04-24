<?php
class Calculator {
    public function calculate($expression) {
        // Remplacement des opérateurs visuels par des équivalents PHP
        $expression = str_replace(['×', '÷', '−', '–', '—'], ['*', '/', '-', '-', '-'], $expression);
        $expression = trim($expression);

        try {
            // Évaluation de l'expression
            $result = eval("return $expression;");
        } catch (Throwable $e) {
            throw new RuntimeException("Erreur de calcul");
        }

        if ($result === false) {
            throw new RuntimeException("Erreur de calcul");
        }

        return $result;
    }
}
?>
