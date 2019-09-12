// var ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);

// var mass = ['a', 'asd', 'qwe'],
//     i = mass.join(', ');
// console.log(i);

var mass = [ 4, 12, 2],
    i = mass.sort(compareNum);
function compareNum(a, b){
    return a-b;
}
console.log(i);