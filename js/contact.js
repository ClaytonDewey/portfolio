// get the iso time string formatted for usage in an input['type="datetime-local"']
var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
var localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1);
var localISOTimeWithoutSeconds = localISOTime.slice(0, 16);

// select the "datetime-local" input to set the default value on
// var dtlInput = document.querySelector('input[type="datetime-local"]');

// set it and forget it ;)
// dtlInput.value = localISOTime.slice(0, 16);

$(function () {
    window.verifyRecaptchaCallback = function (response) {
        $("input[data-recaptcha]").val(response).trigger("change");
    };

    window.expiredRecaptchaCallback = function () {
        $("input[data-recaptcha]").val("").trigger("change");
    };

    $("#contact-form").validator();

    $("#contact-form").on("submit", function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = "alert-" + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' my-3">' + messageText + "</div>";
                    if (messageAlert && messageText) {
                        $("#contact-form").find(".messages").html(alertBox);
                        $("#contact-form")[0].reset();
                        grecaptcha.reset();
                    }
                },
            });
            return false;
        }
    });
});
