$(document).ready( function (){
    $("#InputPassword1").keyup(checkPassword);
    $("#InputPasswordConfirm1").keyup(checkPassword);
    
    $("#enviar").click(function(){
        var mensaje = $('#chat-input').val();
        $('#chat').append('<p><span>usuario:</span> '+mensaje+'</p>');
    });
    $("input[name='spin-apuesta']").TouchSpin();
});

var checkPassword = function (){
    var pass1 = $("#InputPassword1").val();
    if(pass1.length < 6){
        $("#divPassword #errortxt").remove();
        $("#divPassword").addClass("has-error");
        $("#divPassword").append("<p id=\"errortxt\"><u><strong>La contraseña debe tener mínimo 6 caracteres</strong></u></p>");
        $("#btnEnviar").prop("disabled", true);
    }else{
        $("#divPassword #errortxt").remove();
        $("#divPassword").removeClass("has-error");
        $("#btnEnviar").prop("disabled", false);
    }
    var pass2 = $("#InputPasswordConfirm1").val();
    if (pass1 === pass2){
        $("#divConfirm #errortxt").remove();
        $("#divConfirm").removeClass("has-error");
        if(pass1.length > 6){
            //Cargar la página con el usuario registrado
            $("#btnEnviar").prop("disabled", false);
        }
    }else{
        $("#divConfirm").addClass("has-error");
        $("#divConfirm #errortxt").remove();
        $("#divConfirm").append("<p id=\"errortxt\"><u><strong>Las contraseñas no coinciden</strong></u></p>");
        $("#btnEnviar").prop("disabled", true);
    }
}
