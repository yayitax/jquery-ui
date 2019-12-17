/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function() {
    $("#target")
        .css("position", "relative")
        .click(function() {
            // $(this).animate({
            //     "width": "+=20",
            //     "height": "+=20",
            //     "background-color": "red"
            // });

            // $(this).effect("explode", { pieces: 16 }, 2000, function() {
            //     alert("Done-zo!");
            // });

            // $(this).animate({
            //     left: 300
            // }, 1000, "easeInOutElastic");

            $(this).toggleClass("leftTarget", "slow");
        });

    $("#draggables").children().draggable();

    $("#trash").droppable({
        activeClass: "opaque",
        drop: function(event, ui) {
            ui.draggable.hide("explode");
        }
    });
});