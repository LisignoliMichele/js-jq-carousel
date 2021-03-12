$(
function() {
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
    $(".bullets > i").click(
        function(){
            $(this).toggleClass("active");
      }
    );

    // $(".bullets fas.fa-circle").click(
    //   function(){
    //     var $images = $(".images img")
    //     var $bullet = (".bullets fas.fa-circle");
    //     var $imgIndex = $bullet.index($(this));
    //     $("bullets").children().removeClass("active")
    //     $(this).addClass("active");
    //     $image.removeClass("active");
    //     $image.eq($imgIndex).addClass("active");
    //   }
    // );


  }
);
