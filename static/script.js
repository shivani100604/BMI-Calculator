// Display update karne ke liye
function append(value) {
    const display = document.getElementById('display');
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Poora saaf karne ke liye
function clearDisplay() {
    document.getElementById('display').value = '0';
    document.getElementById('result').innerHTML = ''; // BMI result bhi saaf karein
}

// Ek pichla character hatane ke liye
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1) || "0";
}

// Calculator logic
function calculate() {
    try {
        const display = document.getElementById('display');
        // 'Math.PI' jaise complex values ko handle karne ke liye replace karein
        let expression = display.value;
        display.value = eval(expression);
    } catch (e) {
        document.getElementById('display').value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

// Factorial function (n!)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

// BMI Calculation logic
function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const resultDiv = document.getElementById("result");

    if (weight > 0 && height > 0) {
        // Agar height CM mein hai toh M mein badlein
        const heightM = height > 3 ? height / 100 : height;
        const bmi = (weight / (heightM * heightM)).toFixed(1);

        let status = "";
        let color = "";

        if (bmi < 18.5) {
            status = "Underweight 🟡";
            color = "#fbbf24";
        } else if (bmi <= 24.9) {
            status = "Healthy 🟢";
            color = "#10b981";
        } else {
            status = "Overweight 🔴";
            color = "#ef4444";
        }

        resultDiv.innerHTML = `<span style="color: ${color}">BMI: ${bmi} (${status})</span>`;
    } else {
        resultDiv.innerHTML = "Enter Weight & Height!";
    }
}
