$(
function() {


    function nextPicture(){
      var $imageVisible = $(".images img.active");
      var $bulletVisible = $(".bullets > i.active");
      $imageVisible.removeClass(["active", "slideright"]);
      $bulletVisible.removeClass("active");
      if ( $imageVisible.hasClass("last") && $bulletVisible.hasClass("last") ){
        $(".images img.first").addClass(["active", "slideright"]);
        $(".bullets > i.first").addClass("active");
      }else{
        $imageVisible.next().addClass(["active", "slideright"]);
        $bulletVisible.next().addClass("active");
      }
    }

    function prevPicture(){
      var $imageVisible = $(".images img.active");
      var $bulletVisible = $(".bullets > i.active");
      $imageVisible.removeClass(["active", "slideleft"]);
      $bulletVisible.removeClass("active");
      if ($imageVisible.hasClass("first") && $bulletVisible.hasClass("first")){
        $(".images img.last").addClass(["active", "slideleft"]);
        $(".bullets > i.last").addClass("active");
      }else{
        $imageVisible.prev().addClass(["active", "slideleft"]);
        $bulletVisible.prev().addClass("active");
      }
    }

    // CLICK

    $(".bullets > i").click(
        function(){
          var $bullet = $(".bullets > i");
          var $image = $(".images img")
          var $imgIndex = $bullet.index($(this));
          $(".bullets").children().removeClass("active")
          $(this).addClass("active");
          $image.removeClass("active");
          $image.eq($imgIndex).addClass("active");
      }
    );

    $(".next").click(
      function(){
        nextPicture();
      }
    );

    $(".prev").click(
      function(){
        prevPicture();
      }
    );

    // KEYPRESS
    $(document).keydown(
      function(e){

        var keypress = e.keyCode || e.which;

        if(keypress == 39) {   // right arrow
          nextPicture();
        }else if(keypress == 37){   // left arrow
          prevPicture();
        }
      }
    );

  }
);
