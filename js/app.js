
const addList = document.getElementById('addInList');
let itemInput = document.getElementById('itemInput');

const waitSecure = document.getElementById('wait');

const list = document.getElementById('list');

document.addEventListener('keyup',(e)=>{
    let type = e.keyCode;
    
    if (itemInput.value == ""){
        alert("You have to type something first");
    } else {
        if (type === 13) {
        createItem();
        };
    };
});

addList.addEventListener('click', ()=>{
    if (itemInput.value == ""){
        alert("You have to type something first");
    } else {
        createItem();
    };
});

let checkOnList;
let lineItem;

function createItem(){
    const line = document.createElement("div");
    const item = document.createElement("li");
    const ok = document.createElement("i");
    
    line.setAttribute("class", "line");
    item.setAttribute("class", "text");
    
    ok.innerHTML = "<i class='icon-check fa-solid fa-check'></i>";
    
    item.innerHTML = itemInput.value;
    itemInput.value = "";
    
    list.appendChild(line);
    line.appendChild(item);
    line.appendChild(ok);
    
    checkOnList = document.querySelectorAll('.icon-check');
    lineItem = document.querySelectorAll('.line');
    textItem = document.querySelectorAll('.text');
    underlineItem = document.querySelectorAll('.line li');
    
    checkOnList.forEach((index, i)=>{
        index.addEventListener('click',()=>{
            secureLoad();
            console.log(i);
            index.style.color = "#0dc250";
            index.style.scale = "1.2";
            
            underlineItem[i].style.textDecoration = 'none';
            
            textItem[i].removeClass;
            lineItem[i].style.textDecoration = 'line-through #000';
            textItem[i].style.color = '#0dc250';
            lineItem[i].style.transition = '2.5s';
            
            setTimeout(()=>{
                lineItem[i].style.opacity = '0';
            }, 500);
            setTimeout(()=>{
                list.removeChild(lineItem[i]);
            }, 2600);
        });
    });
};

function secureLoad(){
    addList.style.display = 'none';
    itemInput.style.display = 'none';
    animation();
    setTimeout(()=>{
        addList.style.display = 'block';
        itemInput.style.display = 'block';
        waitSecure.style.display = 'none';
    }, 3000);
};

function animation(){
    waitSecure.style.display = 'block';
    waitSecure.innerHTML = "";
setTimeout(function(){
    waitSecure.innerHTML = "Wait...";
}, 300);
setTimeout(function(){
    waitSecure.innerHTML = "";
}, 600);
setTimeout(function(){
    waitSecure.innerHTML = "Wait...";
}, 900);
setTimeout(function(){
    waitSecure.innerHTML = "";
}, 1200);
setTimeout(function(){
    waitSecure.innerHTML = "Wait...";
}, 1500);
setTimeout(function(){
    waitSecure.innerHTML = "";
}, 1800);
setTimeout(function(){
    waitSecure.innerHTML = "Wait...";
}, 2100);
setTimeout(function(){
    waitSecure.innerHTML = "";
}, 2400);
setTimeout(function(){
    waitSecure.innerHTML = "Wait...";
}, 2700);
};
