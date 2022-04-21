var tinhTong = function () {
  var x = document.getElementById('x_value').value * 1;
  var n = document.getElementById('n_value').value * 1;
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  console.log({ sum });
  document.getElementById('bai2_ket_qua').innerHTML = sum;
};

