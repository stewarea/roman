function number(a) {
    for (var i = 0 ; i < 5000 ; i++) {
    if (a >= 1000) {
      text += "M";
      a -= 1000;
    }  else if (a === 900) {
        text += CM;
  } else if (a >= 500)  {
      text += "D";
      a -= 500;
    }  else if (a === 400)  {
        text += "CD";
        a -= 400;
  } else if (a >= 100)  {
      text += "C";
      a -= 100;
    }  else if (a === 90) {
        text += "XC";
        a -= 90;
  } else if (a >= 50) {
      text += "L";
      a -= 50;
    }  else if (a === 40) {
        text += "XV";
        a -= 40;
  } else if (a >= 10) {
      text += "X";
      a -= 10;
    }  else if (a === 9)  {
        text += "IX";
        a -= 90;
  } else if (a >= 5)  {
      text += "V";
      a -= 5;
    }  else if (a === 4)  {
        text += "IV";
        a -= 4;
  } else if (a >= 5)  {
      text += "V";
      a -= 5;
    }  else if (a === 4)  {
        text += "IV";
        a -= 4;
  } else if (a >= 1)  {
      text += "I";
      a -= 1;
  } else {
      a += 5000;
  }


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
}

$(document).ready(function() {
  $("form#numerals").submit(function(event) {
    var a = parseInt($("input#number").val());
    var result = number(a);
    console.log(a);
    $("#translated").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
