function atmWithdrawal() {
    let amount = parseFloat(document.getElementById("amount").value);
    let enteredPin = document.getElementById("pin").value;
    let message = document.getElementById("message");
    let correctPin = "4444";
    let balance = 9000;

    if (enteredPin !== correctPin) {
        message.textContent = "Incorrect PIN";
        return;
    }
    if (amount > balance) {
        message.textContent = "Insufficient Funds";
        return;
    }
    if (amount % 100 !== 0) {
        message.textContent = "Enter amount in multiples of 100";
        return;
    }
    message.textContent = "Withdrawal Successful!";
}

function calculateFinalAmount() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    
    let discount = 0;
    let shipping = 0;

    if (orderAmount > 2000) {
        discount = 0.80;
    } else if (orderAmount >= 500) {
        discount = 0.30;
    }
    
    let finalAmount = orderAmount - (orderAmount * discount);
    
    if (finalAmount < 1010) {
        shipping = 10;
    }
    
    finalAmount += shipping;
    document.getElementById("message1").innerText = `Final Amount: $${finalAmount.toFixed(2)}`;
}
function calculateGrade() {
    let marks = parseFloat(document.getElementById('marks').value);
    let attendance = parseFloat(document.getElementById('attendance').value);
    if (attendance > 90) marks += 5;
    let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
    document.getElementById('gradeResult').innerText = `Final Grade: ${grade}`;
}

function trafficLightControl() {
    let density = document.getElementById('trafficDensity').value;
    let duration = density === "Heavy Traffic" ? 60 : density === "Moderate Traffic" ? 40 : 20;
    document.getElementById('trafficResult').innerText = `Green light duration: ${duration} seconds`;
}
function calculateTicketPrice() {
    let age = parseInt(document.getElementById('age').value);
    let showTime = document.getElementById('showTime').value;
    let basePrice = 12;
    let discount = 0;
    
    let showHour = parseInt(showTime.split(':')[0]);
    if (showHour < 17) discount = 0.10;
    if (age > 60) discount = 0.40;
    if (age < 12) discount = 0.50;
    
    let finalPrice = basePrice - (basePrice * discount);
    document.getElementById('ticketResult').innerText = `Final Ticket Price: $${finalPrice.toFixed(2)}`;
}
function isEligibleForJob() {
    let age = parseInt(document.getElementById('jobAge').value);
    let experience = parseInt(document.getElementById('experience').value);
    let qualification = document.getElementById('qualification').value.trim();
    let result = (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") ? "Eligible for Job" : "Not Eligible";
    document.getElementById('jobResult').innerText = result;
}
function applyCoupon() {
    let orderAmount = parseFloat(document.getElementById('orderAmountCoupon').value);
    let couponCode = document.getElementById('couponCode').value;
    let discount = 0;
    let shipping = orderAmount > 200 ? 0 : 10;

    if (couponCode === "DISCOUNTyayee20" && orderAmount > 500) {
        discount = 0.10;
    } else if (couponCode === "FREESHIPhurray30" && orderAmount > 200) 
        shipping = 0;
    }
    function choosePlan() {
        let wantsTrainer = document.getElementById('wantsTrainer').checked;
        let wantsDietPlan = document.getElementById('wantsDietPlan').checked;
        let suggestedPlan = "Basic ($30/month)";
        
        if (wantsTrainer && wantsDietPlan) {
            suggestedPlan = "VIP ($100/month)";
        } else if (wantsTrainer) {
            suggestedPlan = "Premium ($60/month)";
        }
        
        document.getElementById('membershipResult').innerText = `Suggested Plan: ${suggestedPlan}`;
    }
    function calculateElectricityBill() {
        let units = parseFloat(document.getElementById('units').value);
        let timeOfDay = document.getElementById('timeOfDay').value;
        let rate = 0;
        
        if (units <= 100) {
            rate = 5;
        } else if (units <= 300) {
            rate = 4;
        } else {
            rate = 3;
        }
        
        if (timeOfDay === "peak") {
            rate *= 1.1; // 10% extra charge for peak hours
        }
        
        let totalBill = units * rate;
        document.getElementById('billResult').innerText = `Total Electricity Bill: $${totalBill.toFixed(2)}`;
    }
    function calculateFlightFare() {
        let baseFare = 300;
        let classType = document.getElementById('classType').value;
        let luggageWeight = parseFloat(document.getElementById('luggageWeight').value) || 0;
        let isStudent = document.getElementById('isStudent').checked;
        let isSenior = document.getElementById('isSenior').checked;

        let classCharge = classType === "Business" ? 200 : classType === "First" ? 500 : 0;
        let extraLuggageCharge = luggageWeight > 20 ? Math.ceil((luggageWeight - 20) / 10) * 50 : 0;
        
        let totalFare = baseFare + classCharge + extraLuggageCharge;
        if (isStudent) {
            totalFare *= 0.85;
        } else if (isSenior) {
            totalFare *= 0.90;
        }

        document.getElementById('flightResult').innerText = `Total Flight Fare: $${totalFare.toFixed(2)}`;
    }
