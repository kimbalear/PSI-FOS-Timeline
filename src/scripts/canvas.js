$(document).ready(function () {

    var zoom = 1;

    // Add click event for zoom in button
    $(document).on('click', '#zoomIn', function () {
        console.log("zoomIn")
        zoom += 0.1;
        $("#myCanvas").css("transform", "scale(" + zoom + ")");
    });

    // Add click event for zoom out button
    $(document).on('click', '#zoomOut', function () {
        console.log("zoomOut")
        zoom -= 0.1;
        $("#myCanvas").css("transform", "scale(" + zoom + ")");
    })

    $(document).on('click', '#zoom-reset', function () {
        console.log("reset")
        $("#myCanvas").css("transform", "scale(1)");
        zoom = 1;
    })
})