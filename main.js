//To-Do:
// wenn button gedrückt input aus Textfeld übernehmen
// dann Funktion aufrufen, die output = input ... setzt
// und dann im Dokument anzeigen lassen




$("#convert_btn").click(function(){
    input = $("#input").val();
    output = input.replaceAll(",", ".")
    $("#output").text(output)
})