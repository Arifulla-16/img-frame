$("#falsebut").click((e)=>{
    $("#image").click();
});

image.onchange = evt => {
    const [file] = image.files
    if (file) {
      img.src = URL.createObjectURL(file);
      $("#img").css("display","block")
    }
  }

  $("#circle").click((e)=>{
    $("#img").css("border-radius","50%");
  });

  $("#square").click((e)=>{ 
    $("#img").css("border-radius","0% 100% 100% 0% / 100% 0% 100% 0% ");
  });

  $("#rectangle").click((e)=>{ 
    $("#img").css("border-radius","  68% 94% 40% 84% / 61% 66% 66% 100% ");
  });