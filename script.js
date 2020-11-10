$(function(){
    $("#arrow").click(function(event){
        let email = $("#email").val();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email == "") {
            $("#email").css("border", "2px solid red");
            $("#arrow").css({
                "padding-top": "19.5px",
                "padding-bottom": "19.5px"
            });
            $("#error").css("display", "inline");
            $("#alert").css("visibility", "visible");
        } else if (re.test(String(email).toLowerCase()) == false) {
            $("#email").css("border", "2px solid red");
            $("#arrow").css({
                "padding-top": "19.5px",
                "padding-bottom": "19.5px"
            });
            $("#error").css("display", "inline");
            $("#alert").css("visibility", "visible").text("Looks like this is not an email");
        };
        event.preventDefault();
    });
});