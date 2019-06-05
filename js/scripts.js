$(document).ready(function() {
  $("#shipping").submit(function(event) {
    alert("hello");
    debugger
    var nameInput = $("input#name").val();
    var lastnameInput = $("input#lastname").val();
    var addressInput = $("input#address").val();


    $(".name").text(nameInput);
    $(".lastname").text(lastnameInput);
    $(".address").text(addressInput);
    $("#receipt").show();
    event.preventDefault();
  });

  // $("p").click(function() {
  //   $("img").show();
  // });
  //
  // // item picking code
  // $("#order").select(function() {
  //   var test = $("select:(option[value="item1"]:selected)");
  //     //var test = $(this).find(".item").val();
  //     debugger
  //     alert(test);
  //   });
    // var beverage = $("#beverage").val()
    //   alert(beverage);
    //   event.preventDefault();

    // });

});
