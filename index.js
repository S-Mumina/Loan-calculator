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
    const fixedInterestRate = 12;

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

const addListenersToPage = (page, clickHandler) => {
    page.addEventListener('input', updateMonthsToPay);
    page.addEventListener('click', clickHandler);
};

addListenersToPage(clientPage, showClientPage);
addListenersToPage(lenderPage, showLenderPage);


function goToHomePage() {
    hideAllPages();
    document.getElementById('homePage').style.display = 'block';
}

const homeButtons = document.querySelectorAll('.home-btn');
homeButtons.forEach(button => {
    button.addEventListener('click', goToHomePage);
});


// Prevent propagation of click event on lender input fields
document.querySelectorAll('#lenderPage input').forEach(input => {
    input.addEventListener('click', function(event) {
        event.stopPropagation();
    });

});

// Initialize the home page
showHomePage();
