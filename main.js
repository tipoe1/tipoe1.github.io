$("#convert_btn").click(function(){
    input = $("#input").val();
    output = input.replaceAll(",", ".")
    $("#output").text(output)
})