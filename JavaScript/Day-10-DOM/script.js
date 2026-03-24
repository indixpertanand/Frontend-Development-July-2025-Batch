console.log(document.title)
console.log(document.URL)
console.log(document.characterSet)

// let headers = document.getElementsByTagName('header');

// console.log(headers)

// let sections = document.getElementsByClassName('section');

// console.log(sections);

// let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");

// console.log(section1, section2)

let header = document.querySelector('header')
console.log(header)

let sections = document.querySelectorAll('.section')
console.log(sections)

let section1 = document.querySelector('#section1')
console.log(section1)

let section2h2 = document.querySelector('#section2 > h2')
console.log(section2h2)

let section2Hidden = document.querySelector('#section2 [hidden]')
console.log(section2Hidden)


let submitButton = document.querySelector('#submitButton')

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let checkedElms = document.querySelectorAll('.cheks:checked')
    console.log('form Submitted')
    console.log(checkedElms)
})



let headerh1 = document.querySelector('h1')

headerh1.textContent = "Javascript DOM"

headerh1.innerHTML = "Javascript <em>DOM</em>";

document.querySelector('form').setAttribute('action', '/submithere')
console.log(document.querySelector('form').getAttribute('action'))

headerh1.querySelector('em').style.color = "red"

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

console.log(btn1.classList, btn2.classList, btn3.classList)

btn1.addEventListener('click', function(){
    console.log('button 1 clicked from addEventListener')
    btn1.classList.add('bg-yellow')
})
btn2.addEventListener('click', function(){
    btn2.classList.remove('bg-yellow')
})
btn3.addEventListener('click', function(){
    btn3.classList.toggle('active')
})

let newEl = document.createElement('section');
newEl.innerText = "This is created in Javascript";
newEl.style.backgroundColor = "red"
newEl.style.color = "white";

// document.body.appendChild(newEl)
document.querySelector('main').insertBefore(newEl, section1)

let section2Heading = document.querySelector('#section2 div h2')

let removedItem = section2Heading.remove()
console.log(removedItem) //undefined
let section2Heading2 = document.querySelector('#section2 div h2') //null

console.log(section2Heading, section2Heading2)

let section2HeadingChild = document.querySelector('#section2 h2')
section2HeadingChild.replaceWith(section2Heading)

console.group(section2HeadingChild)

btn1.onclick = function(){
    console.log('button 1 clicked')
}

btn1.onfocus = function(){
    console.log('Button 1 got focus')
}
btn1.onblur = function(){
    console.log('Button 1 Lost focus')
}

btn1.onclick = function(){
    console.log('Click Occored on Second Place')
}

btn2.addEventListener('click', function(e){
    console.log(e)
    console.log('Button clicked from addEventListener')
})

window.addEventListener('load', function(e){
    console.log(e)
})

let para1 = document.querySelector('.para1')
let para2 = document.querySelector('.para2')

document.addEventListener('click', function(){
    console.log('from Document')
}, true)
document.body.addEventListener('click', function(){
    console.log('from Body')
}, true)
section2.addEventListener('click', function(){
    console.log('From Section')
}, true)
para1.addEventListener('click', function(){
    console.log('From Para 1')
}, false)

const logfunction = function(){
    console.log('From Para 2')
}
para2.addEventListener('click', logfunction, true)

para2.removeEventListener('click', logfunction, true)


function editUser(id){
    console.log('Editing User '+ id)
}
function deleteUser(id){
    console.log('Deleting User '+ id)
}
function viewUser(id){
    console.log('Viewing User '+ id)
}


const userTable = document.getElementById('userTable');

userTable.addEventListener('click', function(e){
    let target = e.target;
    if(target.classList.contains('view')){
        viewUser(target.dataset.id)
    }else if(target.classList.contains('delete')){
        deleteUser(target.dataset.id)
    }else if(target.classList.contains('edit')){
        editUser(target.dataset.id)
    }
}
)