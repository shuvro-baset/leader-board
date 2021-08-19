var topPlayerText = document.getElementById('top-player-id');
topPlayerText.style.color = 'green';

// player classes div color change
var playerClass = document.getElementsByClassName('player');
for (var i=0; i<playerClass.length; i++) {
    playerClass[i].style.backgroundColor = 'rgba(0,0,255,0.3)';
}

// create li in to list when click a button
document.getElementById('item-btn').addEventListener('click', function(){
    var newLi = document.createElement('li');
    newLi.innerText = 'new item added';
    newLi.classList.add('list-item');
    const parent = document.getElementById('ul-id');
    parent.appendChild(newLi);
})
//input field value increased onclick button
var inputField = document.getElementById('input-field').value =0;
document.getElementById('input-btn').addEventListener('click', function(){
    inputField = parseInt(inputField);
    inputField ++;
    document.getElementById('input-field').value = inputField;
    if(inputField==5){
        document.getElementById('input-btn').setAttribute('disabled', true);
    }
})