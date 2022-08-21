
function calc() {
    const food = getValueId("food");
    const rent = getValueId("rent");
    const cloth = getValueId("cloth");

    const income = getValueIdIncome("income");

    if (isNaN(food) || isNaN(rent) || isNaN(cloth)) {
        alert("Enter Number as value");
    }

    else if (food < 0 || rent < 0 || cloth < 0 || income < 0) {
        alert("Can't Negative value");
    }

    else {
        let expense = food + rent + cloth;

        if (expense > income) {
            alert(`Your Expense ${expense} is higher than Your Income ${income}`);
        }

        else {
            expense = parseFloat(expense.toFixed(2));
            // total.innerText = expense;
            setTextElementValueById('total', expense);

            const total = getInnerId('total');

            let finalBalance = income - total;

            finalBalance = parseFloat(finalBalance.toFixed(2));
            setTextElementValueById('balance', finalBalance);
        }
    }
}

////////////////////////////////////////////////////////

function save() {
    const save = getValueId("save");
    const income = getValueId("income");

    const balance = getInnerId("balance");

    if (isNaN(save) || isNaN(income)) {
        alert("Enter Number as value");
    }

    else if (save < 0 || income < 0) {
        alert("Can't Negative value");
    }

    else if (save > 100) {
        alert("Saving (%) Can't be more than 100%");
    }

    else {
        let savings = income * (save / 100);

        if (savings > balance) {
            alert(`You can't save ${savings} more than your balance = ${balance}`);
            // alert("You Can't save more than you Balance");
        }

        else {
            savings = parseFloat(savings.toFixed(2));
            setTextElementValueById("savingAmount", savings);

            let remaining = balance - savings;

            remaining = parseFloat(remaining.toFixed(2));
            setTextElementValueById("remain", remaining);
        }
    }
}
