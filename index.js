const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const f=new FormData(e.target);
    const name=f.get('name');
    const email=f.get('email');
    const password=f.get('password');
    console.log(name,email,password);
    form.reset();
})