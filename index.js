// Function to show/hide pages
function showHomePage() {
    hideAllPages();
    document.getElementById('homePage').style.display = 'block';
}

function showClientPage() {
    hideAllPages();
    document.getElementById('clientPage').style.display = 'block';
}

function showLenderLoginPage() {
    hideAllPages();
    document.getElementById('lenderLoginPage').style.display = 'block';
}

function showLenderPage() {
    hideAllPages();
    document.getElementById('lenderPage').style.display = 'block';
}

function checkScoreCard() {
    const clientCreditScore = 500; // Replace with actual client's credit score (you can capture this input from the lender)
    const fixedInterestRate = 12; // Fixed interest rate of 12%

    if (clientCreditScore < 400) {
        document.getElementById('scoreCardResult').innerHTML = 'Sorry, client credit score is too low. No loans.';
    } else {
        document.getElementById('scoreCardResult').innerHTML = 'Congratulations! You can apply for a loan!';
    }

    document.getElementById('interestRate').value = fixedInterestRate;
    updateMonthsToPay();

    hideAllPages();
    document.getElementById('scoreCardPage').style.display = 'block';
}

function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

function updateMonthsToPay() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const monthlyPayment = parseFloat(document.getElementById('monthlyPayment').value);

    if (loanAmount > 0 && interestRate > 0 && monthlyPayment > 0) {
        const monthsToPay = Math.ceil(loanAmount / monthlyPayment);
        document.getElementById('monthsToPay').value = monthsToPay;
    }
}

// Add event listeners for the buttons
document.getElementById('clientPage').addEventListener('input', updateMonthsToPay);
document.getElementById('lenderPage').addEventListener('input', updateMonthsToPay);
document.getElementById('clientPage').addEventListener('click', showClientPage);
document.getElementById('lenderPage').addEventListener('click', showLenderPage);

// Prevent propagation of click event on lender input fields
document.querySelectorAll('#lenderPage input').forEach(input => {
    input.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// Initialize the home page
showHomePage();
