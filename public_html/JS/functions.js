/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
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
            $cur.addClass("highLight");
        } else
            $theList.eq(pos).addClass('highLight');
    }




    function changeText() {
        var $newName = prompt("Enter the new name", "");
        $current = $("li").filter(".highLight"); /**The global variable $current is referenced to the 
         single li which has the claa highLight attached to it **/
        $current.text($newName);






    }
    function addNewChild() {
        var $newName = prompt("Enter the new name", "");
        $current = $("li").filter(".highLight");
        $current.append("<li>" + $newName + "</li>");
        moveDownDOM();/**Invoke the moveDownDOM() function, so that the new li is referenced
         *                        as the $current DOM  element  **/


    }

    function removeChild() {

        $current = $("li").filter(".highLight");
        $current.remove(".highLight");
        moveDownDOM();
    }
    function addSibling() {
        var $newName = prompt("Enter the new name", "");
        $current = $("li").filter(".highLight");
        /**  $($current).after("<li>" + $newName + "</li>"); **/
        /**  $($current).next().append("<li>" + $newName + "</li>"); **/
        if ($($current).is("li")) {

            $($current).append("<ul><li>" + $newName + "</li></ul>");
            moveDownDOM();

        }
      /**  elseIf **/







    }

});


