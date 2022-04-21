var inTheDiv = function () {
  var div = "";
  for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
      div += /* html */ `
            <div class="bg-danger">Thẻ div ${i}</div>
            `;
    } else {
      div += /* html */ `
            <div class="bg-primary">Thẻ div ${i}</div>
            `;
    }
  }
  document.getElementById("bai4_ket_qua").innerHTML = div;
};
