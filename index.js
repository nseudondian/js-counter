let count = 0
const span = document.querySelector('#span')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn){
    btn.addEventListener('click', (event)=>{
        const check = event.currentTarget.classList
        if(check.contains("decrease")){
            count--
        }else if(check.contains("increase")){
            count++
        }else{
            count = 0
        }  
        if(count > 0){
            span.style.color = "#014a01"
        }
        if(count < 0){
            span.style.color = "#b20000"
        }
        if(count === 0){
            span.style.color = "black"
        }
        span.innerHTML = count    
    })

})