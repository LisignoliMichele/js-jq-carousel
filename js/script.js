$(
function() {
    // variables

    $(".next").click(
      function(){
        var $imageVisible = $(".images img.active")
        $imageVisible.removeClass("active");
        if ($imageVisible.hasClass("last") == true){
          $(".images img.first").addClass("active");
        }else{
          $imageVisible.next().addClass("active");
        }
      }
    );
    $(".prev").click(
      function(){
        var $imageVisible = $(".images img.active")
        $imageVisible.removeClass("active");
        if ($imageVisible.hasClass("first") == true){
          $(".images img.last").addClass("active");
        }else{
          $imageVisible.prev().addClass("active");
        }
      }
    );

  }
);
