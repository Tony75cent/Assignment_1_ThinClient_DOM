/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function (e) {
    $("#tree").append("<ol id='top'></ol>");


    $("#tree").append("<ol id='parents' class='parents'></ol>");
    $("#parents").append("<li id='child_1_1gen' class='first_gen'>First generation</li>");
    $("#parents").append("<li id='child_2_1gen' class='first_gen'>First generation</li>");
    $("#parents").append("<li id='child_3_1gen' class='first_gen'>First generation</li>");


    $("#child_1_1gen").append("<ul id ='child_1_2gen' class='second_gen'></ul>");
    $("#child_2_1gen").append("<ul id ='child_2_2gen'class='second_gen'></ul>");
    $("#child_3_1gen").append("<ul id ='child_3_2gen' class='second_gen'></ul>");


    $("#child_1_2gen").append("<li>Second gen list item 1</li>");
    $("#child_1_2gen").append("<li>Second gen list item 2</li>");
    $("#child_2_2gen").append("<li>Second gen list item 3</li>");
    $("#child_2_2gen").append("<li>Second gen list item 4</li>");
    $("#child_3_2gen").append("<li>Second gen list item 5</li>");
    $("#child_3_2gen").append("<li>Second gen  list item 6</li>");

    $("#child_1_2gen").append("<ul id ='child_1_3gen', class='third_gen'></ul>");
    $("#child_2_2gen").append("<ul id ='child_2_3gen', class='third_gen'></ul>");
    $("#child_3_2gen").append("<ul id ='child_3_3gen', class='third_gen'></ul>");

    $("#child_1_3gen").append("<li>Third gen list item 1</li>");
    $("#child_1_3gen").append("<li>Third gen list item 2</li>");

    $("#child_2_3gen").append("<li>Third gen list item 3</li>");
    $("#child_2_3gen").append("<li>Third gen list item 4</li>");

    $("#child_3_3gen").append("<li>Third gen list item 5</li>");
    $("#child_3_3gen").append("<li>Third gen list item 6</li>");
















});
