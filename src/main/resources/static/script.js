document.addEventListener("DOMContentLoaded", function() {
    let calculate = document.getElementById("calculate");
    calculate.addEventListener("click", calculateBudget);

    document.getElementById("salary").addEventListener("change", function() {
        this.value = formatNumberWithCommas(this.value);
    });

    document.getElementById("rent").addEventListener("change", function() {
        this.value = formatNumberWithCommas(this.value);
    });

    function calculateBudget() {
        let salary = parseFloat(document.getElementById("salary").value.replace(/\./g, ''));
        let rent = parseFloat(document.getElementById("rent").value.replace(/\./g, ''));
        let currency = document.getElementById("currency").value;

        if (!salary || !rent) {
            return;
        }

        let discretionary = 0.45 * (salary - rent);
        let grocery = 0.35 * (salary - rent);
        let savings = 0.20 * (salary - rent);

        switch (currency) {
            case "USD":
                document.getElementById("discretionary").innerHTML = "$" + discretionary;
                document.getElementById("grocery").innerHTML = "$" + grocery;
                document.getElementById("savings").innerHTML = "$" + savings;
                break;
            case "EUR":
                document.getElementById("discretionary").innerHTML = "&euro;" + discretionary;
                document.getElementById("grocery").innerHTML = "&euro;" + grocery;
                document.getElementById("savings").innerHTML = "&euro;" + savings;
                break;
            case "DK":
                document.getElementById("discretionary").innerHTML = discretionary + "kr";
                document.getElementById("grocery").innerHTML = grocery + "kr";
                document.getElementById("savings").innerHTML = savings + "kr";
                break;
        }
    }

    function formatNumberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
});
