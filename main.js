$("#convert_btn").click(function(){
    input = $("#input").val();
    output = input.replaceAll(",", ".")
    output = output.replaceAll(" ", "<br>")
    $("#output").html(output)
})