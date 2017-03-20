/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {


    $("li:eq(0)").addClass('highLight');
    $(".mySlides:eq(0)").addClass('border');/** A red border is affixed to the first instance of the mySlides class at position 0 in the array **/
    /**  $("#changeImage").on("click",moveBorder); **/


    var $theList;/** The vars $theList and  pos were  declared outside any function, 
     *    so that a current updated version could be invoked
     *    by any function requiring it. **/
    var pos;
    var $tmp;
    var $cur;
    var $currentElem;
    var $current;/** The DOM  element which has the highLight class attached to it. **/
    $("#moveDownDom").on("click", moveDownDOM);
    $("#moveUpDom").on("click", moveUpDOM);
    $("#addNewChild").on("click", addNewChild);
    $("#changeText").on("click", changeText);

    $("#removeChild").on("click", removeChild);
    $("#addSibling").on("click", addSibling);
    $("#btnClose2").on("click", changeText2);/** A button click event invokes the changeText2 function,
                                                 * A Modal dialogue box is created  **/
    $("#showSubDomTree").on("click", showSubDOMTree);
    $("#btnClose3").on("click", addNewChild2);
    $(".mySlides").on("click", addBorder);
    $("#changeImage").on("click", changeImage4);
    $(".title").on("mouseover",trasnsitionEffect); 
    $(".image").on("click",changeImage4);/**The user positions the cursor over an image and 
     * as a result of a mouse click event the jQuery returns all class "image" elements
     * and the changeImage4  function is invoked
     **/ 

/**
function changeImage3() {

          var   $currentBorder = $(".mySlides").filter('.border');
            $current = $("li").filter('.highLight');

            $($current).attr("src", $currentBorder );

        }

**/
/**
    function getBorder() {
        $currentImageWithBorder = $(".mySlides").filter('.border');
        var $src = $currentImageWithBorder.attr("src");
        $current = $(".mySlides").filter('.highLight');
        $current.append($src);


    }

**/


    function moveDownDOM() {
        $theList = $('li');
        $currentElem = $('.highLight').last();


        pos = $theList.index($currentElem);
        pos++;
        $currentElem.removeClass('highLight');
        if ($theList.eq(pos).children('li').length > 0)
        {
            $tmp = $currentElem.children("li:eq(0)");
            $cur = $tmp.parent(this);
            $cur.addClass("highLight");
        } else
            $theList.eq(pos).addClass('highLight');
        /**  moveBorderDownDOM(); **/
    }

    
    function moveBorderDownDOM() {


        $theList = $('img');
        $currentElem = $('.border').last();


        pos = $theList.index($currentElem);
        pos++;
        $currentElem.removeClass('border');
        if ($theList.eq(pos).children('img').length > 0)
        {
            $tmp = $currentElem.children("img:eq(1)");
            $cur = $tmp.parent(this);
            $cur.addClass("border");
        } else
            $theList.eq(pos).addClass('border');
    }



    function moveUpDOM() {
        $currentElem = $('.highLight').last();


        pos = $theList.index($currentElem);
        pos--;
        $currentElem.removeClass('highLight');
        if ($theList.eq(pos).children('li').length > 0)
        {
            $tmp = $currentElem.children("li:eq(0)");
            $cur = $tmp.parent(this);
            $cur.addClass('highLight');
        } else
            $theList.eq(pos).addClass('highLight');
    }




    function changeText() {
        var $newName = prompt("Enter the new name", "");
        $current = $("li").filter('.highLight'); /**The global variable $current is referenced to the 
         single li which has the claa highLight attached to it **/
        $current.text($newName);/** The text/innerHTML  is changed to that of the user input; $newName  **/

    }
    
    
    function changeText2() {
        var $newName = $("#newname").val();
        $current = $("li").filter('.highLight');
        $($current).html($newName);/** The text/innerHTML  is changed to that of the user input; $newName  **/
    /**  var $image =  $("#penguins").attr('src'); **/

     /** $($current).attr('src',$image); **/
     /**   $currentImageWithBorder = $(".mySlides").filter('.border'); **/
       /**  getImageSrc($currentImageWithBorder); **/
    }
    /**
    function getImageSrc($arg){
        alert("Testing @ 19:22");
        var $img = new Image();
        $($img).html(/Images/Penguins.jpg);
     /**   alert("Test"+$img); **/
        
        
        
   /** } **/

    function addNewChild() { 
        var $newName = prompt("Enter the new name", "");
        $current = $("li").filter('.highLight');/** The query returns all li elements. The $current reference is created by selecting 
                                                * the single li element which has the highLight class applied to it. **/
        $current.append("<li>" + $newName + "</li>");/**The user supplied argument is appended  **/
        moveDownDOM();/**Invoke the moveDownDOM() function, so that the new li is referenced
         *                        as the $current DOM  element  **/


    }
    

    function addNewChild2() {
        var $newName = $("#addChildsName").val();/**The button click event results in 
 *                                               the assingement of the data field value  in the modal dialogue box 
 *                                               to be assigned to the $newName variable  **/

        $current = $("li").filter('.highLight');
        $current.append("<li>" + $newName + "</li>");/** **/
        moveDownDOM();


    }

    function removeChild() {

        $current = $("li").filter('.highLight');
        $current.remove(".highLight");
        moveDownDOM();
    }
    function addSibling() {
        var $newName = prompt("Enter the new name", "");
        $current = $("li").filter('.highLight');
        /**  $($current).after("<li>" + $newName + "</li>"); **/
        /**  $($current).next().append("<li>" + $newName + "</li>"); **/
        if ($($current).is("li")) {

            $($current).append("<ul><li>" + $newName + "</li></ul>");
            moveDownDOM();

        }

        function changeImage() {

            $current = $("li").filter('.highLight');
            $(this).attr("src", "Penguins.jpg");

        }

        
        function moveBorder() {


            $theList = $('.mySlides');
            $currentElem = $('.border').last();


            pos = $theList.index($currentElem);
            pos++;
            $currentElem.removeClass('border');
            if ($theList.eq(pos).children('.mySlides').length > 0)
            {
                $tmp = $currentElem.children(".mySlides:eq(1)");
                $cur = $tmp.parent(this);
                $cur.addClass("border");
            } else
                $theList.eq(pos).addClass('border');
        }



    }

function changeImage4(){
    alert("The current id element is selected using the THIS  keyword and an attempt is made to change the image by changing the image source\n\
           This was not succesful,on this occasion and would merit further investigation ");
      document.getElementById(this).src = '/Images/WilmaFlinstone.jpg';



    
    
}
 function trasnsitionEffect() {

 }
                $("#title").animate({right: '150px'});






    /**
     
     $('body').on('keyup', function () {
     if (event.which == 40) {
     console.log('ok this is up');
     var $theList = $('li');
     var $currentElem = $('.highLight');
     var pos = $theList.index($currentElem);
     
     pos++;
     $currentElem.removeClass('highLight');
     $theList.eq(pos).addClass('highLight');
     } else if (event.which == 38) {
     console.log('ok this is up');
     var $theList = $('li');
     var $currentElem = $('.highLight');
     var pos = $theList.index($currentElem);
     
     pos--;
     $currentElem.removeClass('highLight');
     $theList.eq(pos).addClass('highLight');
     }
     
     });
     **/
    /**
    function getInputText() {
        var $newname = $("#newname").text();

    }
**/
    function showSubDOMTree() {
        /**  $current = $("li").filter('.highLight');  **/
        /**    var   $current = $('#container li').text(); **/
        /**   $current = $('#familyNames li').children().text(); **/
        /**  $current = $('#familyNames li').text(); **/
        /** $current = $('.highLight').text(); **/
     /**   $current = $('.highLight').parent().text(); **/
                $current = $('.highLight').parents().text();



        /**  $current = $(this).parents(); **/
        /**alert($current.children()); /**$current.children(); **/

        /** console.log($('#container li').text()); **/
        alert($current);
    }
    /**
    function getImage() {

        $(".mySlides")

    }
    **/
    /**
     function imageSlider() {
     var i;
     /**var x = document.getElementsByClassName("mySlides");  **/
    /**
     var x =  $(".mySlides"); 
     for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     }
     myIndex++;
     if (myIndex > x.length) {
     myIndex = 1
     }
     x[myIndex - 1].style.display = "block";
     
     setTimeout(imageSlider, 2000);  /// Change image every 2 seconds
     
     }
     **/
    function addBorder() { /**A border class is applied to individual mySlides class elements **/
        $theList = $('.mySlides');
        $currentElem = $('.border').last();


        pos = $theList.index($currentElem);
        pos++;
        $currentElem.removeClass('border');
        if ($theList.eq(pos).children('.mySlides').length > 0)
        {
            $tmp = $currentElem.children(".mySlides:eq(0)");
            $cur = $tmp.parent(this);
            $cur.addClass("border");
        } else
            $theList.eq(pos).addClass('border');

        /**    $(this).addClass("border") **/
    };
});
    
