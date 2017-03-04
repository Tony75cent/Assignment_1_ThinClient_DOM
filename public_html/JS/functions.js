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
    $("#moveDownDom").on("click", moveDownDOM);
    $("#moveUpDom").on("click", moveUpDOM);
    $("#addNewChild").on("click", addNewChild);
    $("#changeText").on("click", changeText);





    function moveDownDOM() {
        /** var **/ $theList = $('li');
        /**  var **/ $currentElem = $('.highLight').last();


        /** var **/ pos = $theList.index($currentElem);
        pos++;
        $currentElem.removeClass('highLight');
        if ($theList.eq(pos).children('li').length > 0)
        {
            /**  var  **/$tmp = $currentElem.children("li:eq(0)");
            /**  var **/ $cur = $tmp.parent(this);
            $cur.addClass("highLight");
        } else
            $theList.eq(pos).addClass('highLight');
    }
    ;

    function moveUpDOM() {
        /** var $theList = $('li'); **/
        /**  var **/ $currentElem = $('.highLight').last();


        /** var  **/pos = $theList.index($currentElem);
        pos--;
        $currentElem.removeClass('highLight');
        if ($theList.eq(pos).children('li').length > 0)
        {
            /** var **/ $tmp = $currentElem.children("li:eq(0)");
            /** var **/ $cur = $tmp.parent(this);
            $cur.addClass("highLight");
        } else
            $theList.eq(pos).addClass('highLight');
    }

    function addNewChild() {

        var $newName = prompt("Enter name of child", "");
        $currentElem.append("<li>" + $newName + "</li>");
        /**  $("li").append($newName).after().filter('.highLight'); **/
        /**  $("li").append($newName).after().filter('.highLight'); **/
        /** $currentElem.prepend("<li>" + $newName + "</li>");**/
        /**$currentElem.append("<li>" + $newName + "</li>"); **/
        /** $currentElem.children().append("<li>" + $newName + "</li>"); **/


    }
    function changeText() {
        var $newName = prompt("Enter the new name", "");
        var $current = $(".listitem li").filter(".highLight");
        $current.text($newName); /** This is good, very good, I have found a reliable way of selecting
                the current element and it works. Complete the other bits demain **/
        /** $currentElem.text($newName); **/






    }

});


