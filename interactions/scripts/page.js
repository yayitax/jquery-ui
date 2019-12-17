/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function() {
    $("#d1").draggable({ snap: "#d2 #d3", revert: "invalid" });
    $("#d2").draggable({
        grid: [50, 100],
        helper: function() {
            return $("<div>I am a helper</div>")
        }
    });
    $("#d3").draggable({ handle: "header" });

    $("#d1 #d2 #d3").draggable("option", "stack", ".ui-draggable");

    $("#trash").droppable({
        activeClass: "opaque",
        accept: "#d3",
        drop: function(event, ui) {
            ui.draggable.fadeOut(function() {
                ui.draggable.remove();
            });
        }
    });

    $("#sortable").sortable({ placeholder: "placeholder" });

    $("#d3").resizable({ aspectRatio: true, alsoResize: "#d2" });
});