$(document).ready( function (){
    $("#btnEnviar").click(checkPassword);
});

var checkPassword = function (){
    var pass1 = $("#InputPassword1").val();
    if(pass1.length < 6){
        $("#divPassword #errortxt").remove();
        $("#divPassword").addClass("has-error");
        $("#divPassword").append("<p id=\"errortxt\"><u><strong>La contraseña debe tener mínimo 6 caracteres</strong></u></p>");
    }else{
        $("#divPassword #errortxt").remove();
        $("#divPassword").removeClass("has-error");
    }
    var pass2 = $("#InputPasswordConfirm1").val();
    if (pass1 === pass2){
        $("#divConfirm #errortxt").remove();
        $("#divConfirm").removeClass("has-error");
        if(pass1.length < 6){
            //Cargar la página con el usuario registrado
        }
    }else{
        $("#divConfirm").addClass("has-error");
        $("#divConfirm #errortxt").remove();
        $("#divConfirm").append("<p id=\"errortxt\"><u><strong>Las contraseñas no coinciden</strong></u></p>");
    }
}
