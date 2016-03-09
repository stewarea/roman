function number(a) {
    var array = {
        "M":1000,
        "CM":900,
        "D":500,
        "CD":400,
        "C":100,
        "XC":90,
        "L":50,
        "XL":40,
        "X":10,
        "IX":9,
        "V":5,
        "IV":4,
        "I":1
      };
    var text = "";
    for (var i = 0 ; i < 5000 ; i++) {
      for (var letter in array) {
        //console.log(letter+": "+array[letter]);
        if (a >= array[letter]) {
          text += letter;
          a -= array[letter];
          break;
        }
      }
        if (a <= 0) {
          i = 5000;
        }
    // if (a >= 1000) {
    //   text += "M";
    //   a -= 1000;
  //   }  else if (a >= 900) {
  //       text += "CM";
  // } else if (a >= 500)  {
  //     text += "D";
  //     a -= 500;
  //   }  else if (a >= 400)  {
  //       text += "CD";
  //       a -= 400;
  // } else if (a >= 100)  {
  //     text += "C";
  //     a -= 100;
  //   }  else if (a >= 90) {
  //       text += "XC";
  //       a -= 90;
  // } else if (a >= 50) {
  //     text += "L";
  //     a -= 50;
  //   }  else if (a >= 40) {
  //       text += "XL";
  //       a -= 40;
  // } else if (a >= 10) {
  //     text += "X";
  //     a -= 10;
  //   }  else if (a === 9)  {
  //       text += "IX";
  //       a -= 90;
  // } else if (a >= 5)  {
  //     text += "V";
  //     a -= 5;
  //   }  else if (a >= 4)  {
  //       text += "IV";
  //       a -= 4;
  // } else if (a >= 1)  {
  //     text += "I";
  //     a -= 1;
  // } else {
  //     i = 5000;
  // }

}
    return text
}

$(document).ready(function() {
  $("form#numerals").submit(function(event) {
    event.preventDefault();
    var a = parseInt($("input#number").val());
    var result = number(a);
    $("#translated").text(result);

    $("#result").show();

  });
});
