function CeasarsCipher (obj) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(),
        otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\, ',
        OUTPUT = "",
        STRING,
        shiftAmount,
        shiftedAlphabet;

    if (typeof obj == "object") {
        shiftAmount = obj.shift;
        STRING = obj.msg.toLowerCase();
    } else {
        return;
    }

    if (typeof STRING == "string" || typeof (STRING + "") === "string") {
        shiftedAlphabet = alphabet.slice(shiftAmount);
        shiftedAlphabet += alphabet.slice(0, shiftAmount);
        shiftedAlphabet += otherCharacters;
        alphabet += otherCharacters;

        for(var i = 0; i < STRING.length; i++){
            var NUMBER = alphabet.indexOf( STRING[i] );
            OUTPUT += shiftedAlphabet[NUMBER]
        }
    } else {
        return;
    }

    return OUTPUT;
}

document.getElementById("message").addEventListener("input", function(){
    var itsValue = this.value;
    document.getElementById("output").textContent = CeasarsCipher({
        msg: itsValue,
        shift: document.getElementById("shift").value
    });
});
document.getElementById("shift").addEventListener("change", function(){
    var itsValue = this.value;
    document.getElementById("output").textContent = CeasarsCipher({
        msg: document.getElementById("message").value,
        shift: itsValue
    })
});

document.getElementById("output").textContent = CeasarsCipher({
    msg: document.getElementById("message").value,
    shift: document.getElementById("shift").value
});
