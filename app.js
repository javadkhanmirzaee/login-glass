const btn_show = document.querySelector('.show');
const pass_field = document.querySelector('.password');

btn_show.addEventListener('click' , ()=>{
    if (pass_field.type === 'password') {
        pass_field.type = 'text'
        btn_show.style.color = '#079992'
        btn_show.textContent = 'HIDE'
    } else {
        pass_field.type = 'password'
        btn_show.style.color = '#222'
        btn_show.textContent = 'SHOW'
    }
})