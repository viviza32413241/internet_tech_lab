$(document).ready(function () {
    let clickCount = 0;
    $("p").on("click", function () {
        clickCount++;
        setTimeout(function () {
            if (clickCount === 1) {
                $("body").append("<p>This is a click Event</p>");
            }
            clickCount = 0;
        }, 450);

    });
    $("p").on("dblclick", function () {
        $("body").append("<p>This is a double-click Event</p>");
    });
});