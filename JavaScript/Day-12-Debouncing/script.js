let inputEl = document.getElementById('searchInput');

let eventhandler = function(e){
    console.log(e)
    console.log('Handler Called')
}
inputEl.addEventListener('input', debounce(eventhandler, 1000))
inputEl.addEventListener('input', throttle(eventhandler, 1000))


function debounce(func, delay){
    let timer;
    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(()=>{
            func.apply(this, args)
        }, delay)
    }
}

const echoScroll = function(){
    console.log(window.scrollY)
}

window.addEventListener('scroll', debounce(echoScroll, 300))
