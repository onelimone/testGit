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
var r = [];
for(var i = 0; i < 2; i++){
    do{
        var q = 0;
            a = prompt('Введите обязательную статью расходов в этом месяце');
            b = +prompt('Во сколько обойдется?');
        if ( a.length <= 50 && a != "" &&
            b != "0" && isNaN(b) != true){
                r[i] = a;
                q++;
                appData.expenses[a] = b;
            }
    }
    while(q < 1);
};
var a = appData.moneyData / 30;
alert(a);
if (a < 100){
    alert("Это слишком мало!");
}else if (a > 100 && a < 300){
    alert("Уже что то");
}else if (a > 300){
    alert("Очень много");
}