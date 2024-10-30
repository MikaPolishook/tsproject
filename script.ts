let s = document.getElementById("s")!;
let s2 = document.getElementById("s2")!;
let b = document.getElementById("b")!;
let d = document.getElementById("d")!;
let i = document.getElementById("i")! as HTMLInputElement;
 b.onclick = function() {
    if (i.checked) {
     s.innerText= "The answer is right";
     s.style.color = "green";
    }
    else { 
        s.innerText="The answer is wrong";
        s.style.color= "red";
    }
}