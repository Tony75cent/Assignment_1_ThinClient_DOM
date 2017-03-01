/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
     $("li:eq(0)").first().addClass("highLight");  

  /**  $(".listitem li ").on("mouseover", addHighlight); **/
   
  /**  $("li").on("mouseout", removeHighlight **/
    $(".listitem li").on("click", addChild);
    function removeHighlight() {
        $(this).removeClass("highLight");
    }
    function addHighlight() {
        $(this).addClass("highLight");
    }
    function addChild() {
        $(this).addClass("highLight");
        var $tmp = prompt("Enter new name", "");
        $(".listitem li").filter(".highLight");
        var $pos = $(this);
        $(this).append("<li>" + $tmp + "</li>",{"class":"active"});
        $(this).removeClass("highLight");
    }
});
function moveDownDom() {
    var $current = $(".listitem li").filter(".highLight");
    /** $(this).add("li").text("Test@21:05"") **/
    $current.add("li");


}

function createNode($arg1, $arg2) {
    var $li = $(this).append("<li>" + $arg1 + "</li>",{"class":"tree li a "});
    var $ele = $arg2;
    






}