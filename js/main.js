var makebold = document.getElementById("textarea");

function function1(){
    if (makebold.style.fontWeight=="normal") {
        makebold.style.fontWeight="bold"
    } else {
        makebold.style.fontWeight="normal"
    }
}
function function2(){
    if (makebold.style.fontStyle=="normal") {
        makebold.style.fontStyle="italic"
    } else {
        makebold.style.fontStyle="normal"
    }
}
function function3(){
    if (makebold.style.textDecoration=="none") {
        makebold.style.textDecoration="underline"
    } else {
        makebold.style.textDecoration="none"
    }
}
function changesize(){
    var select = document.getElementById("sel");
    if (select.value=="20") {
        makebold.style.fontSize="20px"
    }
    else if (select.value=="30") {
        makebold.style.fontSize="30px" 
    } 
    else if (select.value=="40") {
        makebold.style.fontSize="40px"
    }
}
function changepolice(){
    var select2 = document.getElementById("sel2");
    if (select2.value=="arial1") {
        makebold.style.fontFamily="arial"
    }
    else if (select2.value=="verdana1") {
        makebold.style.fontFamily="verdana" 
    } 
    else if (select2.value=="generva1") {
        makebold.style.fontFamily="generva"
    }
}