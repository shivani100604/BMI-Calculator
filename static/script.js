function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const resultDiv = document.getElementById("result");

    if (weight > 0 && height > 0) {
        // Height in meters if user enters in cm
        const heightInMeters = height > 3 ? height / 100 : height; 
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        let category = "";
        let color = "";

        if (bmi < 18.5) {
            category = "Underweight 🟡";
            color = "#fbbf24";
        } else if (bmi <= 24.9) {
            category = "Healthy 🟢";
            color = "#10b981";
        } else {
            category = "Overweight 🔴";
            color = "#ef4444";
        }

        resultDiv.innerHTML = `Your BMI is <strong style="color:${color}">${bmi}</strong><br>Status: ${category}`;
    } else {
        resultDiv.innerHTML = "Please enter valid values!";
    }
}
