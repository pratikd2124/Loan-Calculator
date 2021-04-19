function computeLoan(){
            var amount = document.getElementById('amount').value;
            var interest_rate = document.getElementById('rate').value;
            var months = document.getElementById('duration').value;
            var interest = (amount * (interest_rate * .01)) / months;
            var payment = ((amount / months) + interest).toFixed(2);
            payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
            document.getElementById('ans').innerHTML = payment;
        }