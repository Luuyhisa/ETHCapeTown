

function myFunction() {
    var varName = document.getElementById("txtName");
    alert(varName.value);
    var varAdd = document.getElementById("txtAdd");
    alert(varAdd.value);
    var varShare = document.getElementById("txtShare");
    alert(varShare.value);
    document.getElementById('TextArea1').value ="Name :" +varName.value + " -    Address :" + varAdd.value + " -  Share amount :" + varShare.value;
}


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}