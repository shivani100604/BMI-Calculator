// Display update karne ke liye function
function append(value) {
    const display = document.getElementById('display');
    // Agar sirf 0 hai toh use naye value se replace karein
    if (display.value === "0" && value !== ".") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Screen saaf karne ke liye
function clearDisplay() {
    document.getElementById('display').value = '0';
    document.getElementById('result').innerHTML = '';
}

// Last digit delete karne ke liye
function backspace() {
    const display = document.getElementById('display');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

// Main calculation logic
function calculate() {
    try {
        const display = document.getElementById('display');
        let expression = display.value;
        
        // Scientific symbols ko JS compatible banane ke liye
        expression = expression.replace(/π/g, 'Math.PI');
        
        // Eval se calculate karein
        const result = eval(expression);
        display.value = Number.isInteger(result) ? result : result.toFixed(4);
    } catch (e) {
        document.getElementById('display').value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

// BMI calculation function
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultDiv = document.getElementById("result");

    if (weight > 0 && height > 0) {
        // Height check: agar CM mein hai toh M mein badlein
        const h = height > 3 ? height / 100 : height;
        const bmi = (weight / (h * h)).toFixed(1);

        let status = "";
        let color = "";

        if (bmi < 18.5) { status = "Underweight"; color = "#fbbf24"; }
        else if (bmi <= 24.9) { status = "Healthy"; color = "#10b981"; }
        else { status = "Overweight"; color = "#ef4444"; }

        resultDiv.innerHTML = `<span style="color: ${color}">BMI: ${bmi} (${status})</span>`;
    } else {
        resultDiv.innerHTML = "<span style='color: #f87171'>Enter valid W & H</span>";
    }
}
