/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $(".listitem a").first().addClass("highLight"); 

    $(".listitem a ").on("mouseover", addHighlight);
    $("#btn1").on("click", moveDownDom);
   /**  $("#btn2").on("click", addChild); **/

    $("a").on("mouseout", removeHighlight);
     $(".listitem a").on("click",addChild); 
    function removeHighlight() {
        $(this).removeClass("highLight");
    }
    function addHighlight() {
        $(this).addClass("highLight");
    }
    function addChild() {  
        var $p = prompt("Enter new name", "");
 /** var $currItem = $(".listitem a").filter(".highLight"); **/
 /** var $currItem = $("listitem a").filter(".highLight"); **/
 /**  $(this).add("li").text($p); **/
  $(".listitem a").filter(".highLight").next().append("<li>"+$p+"<li>");

 

          /** $currItem.append("li a").text(p);  **/
                    $currItem.add(" li").text($p);
/**  $("<li>"+$p+"</li>").appendTo(this); **/
       /** $currItem.this.append("li").text(p); **/

        /** $(this).append("li").text(p); **/
        /**   $(this).filter(".highLight").add("li").text(p); **/
    }
});
function moveDownDom() {
    var $current = $(".listitem a").filter(".highLight");
    /** $(this).add("li").text("Test@21:05"") **/
    $current.add("li");

    /**  var $listItems =   $(".listitem a"); **/
    /**alert("Test@20:03"); **/
    /**   var $currentSelectedItem = $listItems.filter(".highLight");
     /**    var $name = $currentSelectedItem.text(); **/
    /** $(".tree  .listitem ul").append("li").text("test@19:55"); **/
    /**  $("#msg").text($name); **/
    /**    $currentSelectedItem.removeClass("highLight"); **/
    /**    $currentSelectedItem.first().addClass("highLight");  **/


}