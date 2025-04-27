let h1=document.querySelector('h1')

//Adding interactive nesss
//2 arguments-1st one action,2-event to be performed inf funtion form
h1.addEventListener('click',()=>{
h1.style.backgroundColor='red'
h1.style.fontSize='4rem'
h1.style.color='white'

//modfiying the content
h1.textContent="Hi lokesh !welcome"
})