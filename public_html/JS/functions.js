/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {

    $("#moveDownDom").on("click", moveDownDOM);
    $("#moveUpDom").on("click", moveUpDOM);



    function moveDownDOM() {
        var $theList = $('li');
        var $currentElem = $('.highLight').last();


        var pos = $theList.index($currentElem);
        pos++;
        $currentElem.removeClass('highLight');
        if ($theList.eq(pos).children('li').length > 0)
        {
            var $tmp = $currentElem.children("li:eq(0)");
            var $cur = $tmp.parent(this);
            $cur.addClass("highLight");
        } else
            $theList.eq(pos).addClass('highLight');
    }
    ;
    function moveUpDOM() {
        var $theList = $('li');
        var $currentElem = $('.highLight').last();


        var pos = $theList.index($currentElem);
        pos--;
        $currentElem.removeClass('highLight');
        if ($theList.eq(pos).children('li').length > 0)
        {
            var $tmp = $currentElem.children("li:eq(0)");
            var $cur = $tmp.parent(this);
            $cur.addClass("highLight");
        } else
            $theList.eq(pos).addClass('highLight');
    }
    ;

});


