const topbarMessages=['Frete grátis em todo o Brasil','Estoque disponível para envio','Entrega para todo o Brasil','Compra segura no checkout Kaiross'];
const topbarMessage=document.querySelector('.topbar-message');
const topbarDots=document.querySelectorAll('.topbar-dots i');
let topbarIndex=0;
if(topbarMessage){window.setInterval(()=>{topbarMessage.classList.add('is-changing');window.setTimeout(()=>{topbarIndex=(topbarIndex+1)%topbarMessages.length;topbarMessage.textContent=topbarMessages[topbarIndex];topbarDots.forEach((dot,index)=>dot.classList.toggle('active',index===topbarIndex));topbarMessage.classList.remove('is-changing')},180)},3200)}

document.querySelectorAll('a[href*="pay.kaiross.com.br"]').forEach((link)=>{link.addEventListener('click',()=>{if(typeof window.fbq==='function'){window.fbq('track','InitiateCheckout',{value:169.90,currency:'BRL'})}window.dispatchEvent(new CustomEvent('checkout-intent',{detail:{placement:link.textContent.trim()}}))})})
document.querySelectorAll('.function').forEach((item)=>{item.addEventListener('click',()=>{document.querySelectorAll('.function').forEach((el)=>el.classList.remove('active'));item.classList.add('active')})})
