var tinhGiaiThua = function () {
  var n = document.getElementById("n_value_bai3").value * 1;

  var giaiThua = 1;
  for (let i = 1; i <= n; i++) {
    giaiThua *= i;
  }
  console.log({ giaiThua });
  document.getElementById("bai3_ket_qua").innerHTML = giaiThua;
};
