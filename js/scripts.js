function number(a) {
    for (var i = 0 ; i < 5000 ; i++) {
    if (a >= 1000)
      text += "M"
//   var text = "";
//   var rom = {I:1, IV:4, V:5, IX:9, X:10, L:50, C:100, D:500, M:1000};
//   var input = number.split("");
//   var total = 0
//   for (var i = 0 ; i < input.length ; i++) {
//     if (i < 10) {
//       total += input[i]
//       else if ( 10 <= 100)
//     }
// }
    return text
}

$(document).ready(function() {
  $("form#numerals").submit(function(event) {
    var a = $("input#number").val();
    var result = number(a);

    $("#translated").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
