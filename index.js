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
    const clientCreditScore = 500;
   

    if (clientCreditScore < 400) {
       prompt('Sorry, client credit score is too low. No loans.');
    } else {
        prompt('Congratulations! You can apply for a loan!');
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

const clientPage = document.getElementById('clientPage');
const lenderPage = document.getElementById('lenderPage');

function goToHomePage() {
    hideAllPages();
    document.getElementById('homePage').style.display = 'block';
}
const homeButtons = document.querySelectorAll('.home-btn');
const addListenersToPage = (page, clickHandler) => {
    page.addEventListener('input', updateMonthsToPay);
    page.addEventListener('click', function(event) {
        if (event.target.classList.contains('home-btn')) {
            goToHomePage();
        } else {
            clickHandler();
        }
    });
};

addListenersToPage(clientPage, showClientPage);
addListenersToPage(lenderPage, showLenderPage);


/*function goToHomePage() {
    hideAllPages();
    document.getElementById('homePage').style.display = 'block';
}*/

// Prevent propagation of click event on lender input fields
document.querySelectorAll('#lenderPage input').forEach(input => {
    input.addEventListener('click', function(event) {
        event.stopPropagation();
    });

});

// Initialize the home page
showHomePage();
