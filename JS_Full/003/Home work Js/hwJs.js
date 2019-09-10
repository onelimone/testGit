var money = prompt("Ваш бюджет на месяц.");
var time = prompt("Введите дату (в формате YYYY-MM-DD).");
var appData = 
    {
        moneyData : money,
        timeData : time,
        expenses : {},
        optionalExpenses: {},
        income : [],
        saving : false
    };
// let a1 = prompt('Введите обязательную статью расходов в этом месяце');
//     a2 = prompt('Во сколько обойдется?');
//     a3 = prompt('Введите обязательную статью расходов в этом месяце');
//     a4 = prompt('Во сколько обойдется?');
// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

for (let i = 0; i < 2; i++)
{
    let a = prompt('Введите обязательную статью расходов в этом месяце');
        b = prompt('Во сколько обойдется?');
        q = 0;
    while (q < 1)
    {
        if ((typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null
        && a != '' && b != '' && a.length < 50) 
        {
            q++
            appData.expenses[a] = b;
        }
    }
}
alert(appData.moneyData / 30);