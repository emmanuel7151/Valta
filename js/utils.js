setInterval(function() {
    var element = document.getElementById("valueTree");
    var next = parseInt(element.value) +1;
    var img = document.getElementById("img" + element.value);
    if(element.value != "5"){
        img.parentElement.classList.add("tree-effect");
        let nextImg = document.getElementById("img" + next.toString());
        nextImg.parentElement.classList.remove("tree-effect");
        nextImg.parentElement.classList.add("tree-reffect");
        element.value = next;

    }
    else{
        img.parentElement.classList.add("tree-effect");
        let nextImg = document.getElementById("img1");
        nextImg.parentElement.classList.remove("tree-effect");
        element.value = "1";
    }
}, 3000);
