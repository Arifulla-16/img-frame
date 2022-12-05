$("#falsebut").click((e)=>{
    $("#image").click();
});

var uurl;

image.onchange = evt => {
    const [file] = image.files
    if (file) {
      img.src = URL.createObjectURL(file);
      uurl=URL.createObjectURL(file);
      $("a").css("display","block");
    }
  }
  
  $("#circle").click((e)=>{
    $("a").css("display","none");
    $("#ovimg").css("display","block");
    $("#ovimg").css("background-image",`url(${uurl})`);
    $("#ovimg").attr("src","/asset/asset/output-onlinepngtools (2).png");
    $("#ovimg").css("width","200px");
  });

  $("#square").click((e)=>{ 
    $("a").css("display","none");
    $("#ovimg").css("display","block");
    $("#ovimg").css("background-image",`url(${uurl})`);
    $("#ovimg").attr("src","/asset/asset/output-onlinepngtools (1).png");
    $("#ovimg").css("width","200px");
  });

  $("#rectangle").click((e)=>{ 
    $("a").css("display","none");
    $("#ovimg").css("display","block");
    $("#ovimg").css("background-image",`url(${uurl})`);
    $("#ovimg").attr("src","/asset/asset/output-onlinepngtools (3).png");
    $("#ovimg").css("width","210px");
  });

  $("#heart").click((e)=>{ 
    $("a").css("display","none");
    $("#ovimg").css("display","block");
    $("#ovimg").css("background-image",`url(${uurl})`);
    $("#ovimg").attr("src","/asset/asset/output-onlinepngtools.png");
    $("#ovimg").css("width","200px");
  });