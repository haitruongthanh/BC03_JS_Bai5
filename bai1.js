/* Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + 3 + 4 + .. + n > 1000

*/

var sum = 0;
var i = 1;
for (i = 1; sum < 10000; i++) {
    sum += i;
}
document.getElementById('bai1_ket_qua').innerHTML = /* html */ `Số nguyên dương nhỏ nhất ${i - 1}`;
console.log({sum});
console.log({i});
