<?php
use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/../calculator.php';

class CalculatorTest extends TestCase {
    public function testAddition() {
        $calc = new Calculator();
        $this->assertEquals(5, $calc->calculate("2+3"));
    }

    public function testSoustraction() {
        $calc = new Calculator();
        $this->assertEquals(1, $calc->calculate("3-2"));
    }

    public function testMultiplication() {
        $calc = new Calculator();
        $this->assertEquals(6, $calc->calculate("2*3"));
    }

    public function testDivision() {
        $calc = new Calculator();
        $this->assertEquals(2, $calc->calculate("6/3"));
    }

    public function testDivisionParZero() {
        $this->expectException(Exception::class);
        $calc = new Calculator();
        $calc->calculate("6/0");
    }
}
