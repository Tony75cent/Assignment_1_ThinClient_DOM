/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {  /**I have uncommented this line  **/
    console.log("Ok, DOM  loaded");
   /** $("li:eq(0),li:eq(4),li:eq(7)").addClass("highLight"); **/
      /**  $("li:eq(0),li:eq(5)").addClass("highLight"); **/
/**$("li").first().next().addClass("highLight"); **/
$("li").addClass("highLight"); 
/** $( "li" ).eq( 1 ).toggleClass("highLight");  **/
$("li").on("mouseout",addHighlight);
$("li").on("mouseover",removeHighlight);
$("li").on("click",changeText);
function removeHighlight(){
    $(this).removeClass("highLight");
}
function addHighlight(){
    $(this).addClass("highLight"); 
}
function changeText(){
    var p = prompt("Enter new name","");
     $(this).text(p);
 }
    });
    
    /**
    $("h1");
    $("#family1");
    **/
    /**
    $(function () {
        //$("body").css( "background-color", "red" );
        /**alert("ok DOM loaded"); **/
    /**
        $("#firstCoffee").text("ok add coffee"); //addClass("highLight");
        $("#firstCoffee").addClass("highLight");
   /**     $("li:eq(1)").siblings("li:eq(1)").addClass("highLight"); **/
    /**
        $("li:eq(1)").siblings("li:eq(1)").addClass("highLight");

        /**  alert($("li:first").text("test @ 21:24")); **/
        //alert("sibs " + $("li").siblings().add("li")) ;
/**
        console.log($("li").length);
        console.log("paragraphs = " + $('p').text());
        $("p:eq(1)").text("<h1>bla bla </h1>");
        console.log("divs = " + $('div'));
        
        function fadeIn(){
            
            
        }

      /**  $("#box").toggle(fadeIn, 5000);  **/
        /**
      $("#hideButton").click(function(){
          $("#box").fadeOut(3000);
      });
        $("#alertButton").click(function () {
            alert($("body").text());
        });

        $("#box").hover(function () {
            console.log("going in " + $(this).text());
            $(this).css('background-color', 'green');
        }, function () {
            console.log("going out " + $(this).text());
            $(this).css('background-color', 'red');
        });

        $("#hideButton").on('click', function () {
            alert($('.highLight').text());
            $("#colour").hide();
        });

        $("#alertButton").click(function () {
            alert($("body").text("Test @ 21:45"));
            alert("ok move down dom list" );
           //  move to next li element

            var $theList = $('li');
            // us elast Reduce the set of matched elements to the final one in the set.
            var $currentElem = $('.highLight').last();
            var pos = $theList.index($currentElem);

            pos++;
            $currentElem.removeClass('highLight');
            alert("ypu have " + $currentElem.siblings('li').length);
            if ($theList.eq(pos).children('li').length > 0)
            {
                var $tmp = $currentElem.children("li:eq(0)");
                var $cur = $tmp.parent(this);
                $cur.addClass("highLight");
            } else
                $theList.eq(pos).addClass('highLight');
        });
    });

//});
**/
//});