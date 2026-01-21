function append(value) {
    const display = document.getElementById('display');
    if(display.value === "0") display.value = ""; // Shuruati 0 hatane ke liye
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
    try {
        const display = document.getElementById('display');
        // Eval use karte waqt galti na ho isliye try-catch
        display.value = eval(display.value.replace('π', 'Math.PI')); 
    } catch (e) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}
