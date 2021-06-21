/* eslint-disable */

$(function () {
    //    $("div").remove(); // 삭제 기능

    $("div").css({
        "border": "1px solid #000",
        "color": "red"
    });

    $("button").click(function () {

        $("div#temp2").css({
            "border": "3px solid #f60",
            "color": "blue"
        });

    });


});
