/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
    /** console.log($('#container li').text()); **/
    console.log("Test2 " + $("#listitem li").text());


    /** $("#title").animate({left: '250px'}); **/
    $("li:eq(0)").addClass('highLight');

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
    /**   $("#changeText").on("click", changeText2); **/

    $("#removeChild").on("click", removeChild);
    $("#addSibling").on("click", addSibling);
    $("#btnClose2").on("click", changeText2);
    $("#showSubDomTree").on("click", showSubDOMTree);
    $("#btnClose3").on("click",addNewChild2);
    /**  $("#newname").on("click",changeText2); **/








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
    }
    ;

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
        var newName = prompt("Enter the new name", "");
        $current = $("li").filter('.highLight'); /**The global variable $current is referenced to the 
         single li which has the claa highLight attached to it **/
        $current.text(newName);






    }
    function changeText2() {
        var $newName = $("#newname").val();
/** This is being used with the Modal dialogue box**/
        $current = $("li").filter('.highLight');
       $($current).html($newName);
        






    }
    function addNewChild() { /**This function works **/
        var $newName = prompt("Enter the new name", "");
        $current = $("li").filter('.highLight');
        $current.append("<li>" + $newName + "</li>");
        moveDownDOM();/**Invoke the moveDownDOM() function, so that the new li is referenced
         *                        as the $current DOM  element  **/


    }

function addNewChild2() { 
            var $newName = $("#addChildsName").val();

       /** var $newName = prompt("Enter the new name", ""); **/
        /** This is being used with the Modal dialogue box**/

        $current = $("li").filter('.highLight');
        $current.append("<li>" + $newName + "</li>");
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







    }
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
    function getInputText() {
        var $newname = $("#newname").text();

    }

    function showSubDOMTree() {
        /**  $current = $("li").filter('.highLight');  **/
        /**    var   $current = $('#container li').text(); **/
        /**   $current = $('#familyNames li').children().text(); **/
        /**  $current = $('#familyNames li').text(); **/
        /** $current = $('.highLight').text(); **/
        $current = $('.highLight').parent().text();


        /**  $current = $(this).parents(); **/
        /**alert($current.children()); /**$current.children(); **/

        /** console.log($('#container li').text()); **/
        alert($current);
    }


});
