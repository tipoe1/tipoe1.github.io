$("#convert_btn").click(function(){
    input = $("#input").val();
    output = input.replaceAll(",", ".")
    output = output.replaceAll(" ", "<br>")
    $("#output").html(output)
});

function copy(){
    var copyText = document.getElementById("output")
    const clipboardItem = new ClipboardItem({
        "text/plain": new Blob(
            [copyText.innerText],
            { type: "text/plain" }
        ),
        "text/html": new Blob(
            [copyText.outerHTML],
            { type: "text/html" }
        ),
    });
    
    navigator.clipboard.write([clipboardItem]);

};

$("#copy_btn").click(copy)
    
