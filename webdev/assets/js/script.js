$(".btn_calc").click(function() {


  var parent_width = $("#parent_width").val();
  var child_width = $("#child_width").val();
  var result = (child_width / parent_width)*100;

  $("#result_span").html(result.toFixed(2));
  $(".parent_div_wrapper").show();


  $(".child_div").css("width",result+"%");
  $(".width_data").html(result.toFixed(2)+"%");

  if($("#radio1").is(":checked")){
    $(".marvel-device.macbook").css("display","inline-block");
    $(".marvel-device.ipad").css("display","none");
    $(".marvel-device.iphone6").css("display","none");
    console.log("mac");
  }
  if($("#radio2").is(":checked")){
    $(".marvel-device.macbook").css("display","none");
    $(".marvel-device.ipad").css("display","inline-block");
    $(".marvel-device.iphone6").css("display","none");
    console.log("ipad");
  }
  if($("#radio3").is(":checked")){
    $(".marvel-device.macbook").css("display","none");
    $(".marvel-device.ipad").css("display","none");
    $(".marvel-device.iphone6").css("display","inline-block");
    console.log("iphone");
  }

});
