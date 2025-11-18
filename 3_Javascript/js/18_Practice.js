document.getElementById("apply-button").addEventListener("click", () => {

    const contain = document.getElementById("container");
    const boxWidth = document.getElementById("width");
    const boxHeight = document.getElementById("height");
    const content = document.getElementById("contents");
    const color = document.getElementById("font-color");
    const hAlign = document.getElementsByName("h-align");
    const vAlign = document.getElementsByName("v-align");

    let horizontal;
    let vertical;

    for(let i = 0; i < hAlign.length; i++) {
        if(hAlign[i].checked) {
            horizontal = hAlign[i].value;
            break; 
        }
    }

    for(let i = 0; i < vAlign.length; i++) {
        if(vAlign[i].checked) {
            vertical = vAlign[i].value;
            break;
        }
    }

    const box = document.createElement("div");
    box.style.width = boxWidth.value + "px";
    box.style.height = boxHeight.value + "px";
    box.style.border = "1px solid black";
    box.style.display = "flex";
    box.style.justifyContent = horizontal;
    box.style.alignItems = vertical;

    const text = document.createElement("p");
    text.innerText = content.value;
    text.style.color = color.value;

    box.append(text);

    contain.append(box);
});