// for(let i = 0; i < 3; i++)
// {
//     let x = '';
//         m = i;
//     console.log(m);
//     while(m < (5 + i))
//     {
//         x = x + m;
//         m++;
//     }
//     console.log(x);
// }
// for(let i = 0; i < 2; i++)
// {
//     let a = prompt(1);
//         b = +prompt(2);
//         q = 0;
//     while(q <1)
//     {
//         if (/*a.length < 50 && a === 'string' && */a != null &&
//             b != null)
//         {
//             console.log(" " + 1 + " ");
//             q++;
//             console.log(" " + 1 + " ");
//         }   else 
//             {
//                 a = prompt(1);
//                 b = prompt(2);
//             }
//     }
// }
for(let i = 0; i < 2; ++i){
    do{
        let a = prompt(i + "1");
            b = prompt(i + "2");
            q = 0;

            console.log('a = "' + a + '", b = "' + b + '"');

            if (a != '' && b != '')
            {
                q++;
            } 
    }
    while(q <1);
}