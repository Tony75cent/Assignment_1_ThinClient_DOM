
        //$(document).ready(function () {
        $(function () {
            //$("body").css( "background-color", "red" );
            alert("ok DOM loaded");
            $("#firstCoffee").text("ok add coffee"); //addClass("highLight");
            $("#firstCoffee").addClass("highLight");
            //$("li:eq(1)").siblings("li:eq(0)").addClass("highLight");
            //alert($("li:first").text());
            //alert("sibs " + $("li").siblings().add("li")) ;

            console.log($("li").length);
            console.log("paragraphs = " + $('p').text());
            $("p:eq(1)").text("<h1>bla bla </h1>");
            console.log("divs = " + $('div'));

            /*$("#box").toggle(fadeIn,5000);
             $("#alertButton").click( function() { 
             alert($("body").text());
             });
             */
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

            /**$("#alertButton").click( function() {  **/ /**This is the original line  **/
            $("#moveDownDom").click(function () {

                //alert($("body").text());
                //alert("ok move down dom list" );
                // move to next li element

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

