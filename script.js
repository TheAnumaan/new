
const dis=document.querySelector('.id1')
const butt=document.querySelector(".btn1")

butt.addEventListener('click',()=>{
    const source = "qwertyuiopasdfghjklzxcvbnm,./09887654321!@#$%^&*|QWERTYUIOPASDFGHJKLZXCVBNM";

    let password = "";



    
for (let i=0;i<15;i++) {
        const number = Math.floor(Math.random() * source.length);
        password+=source[number]
    
}
console.log(password);
dis.value=password



})





