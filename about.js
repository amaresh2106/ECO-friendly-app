const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
menuBtn.addEventListener('click',()=>{
sidebar.classList.add('showSidebar');
});
document.addEventListener('mousedown',(e)=>{
if(!sidebar.contains(e.target)){
sidebar.classList.remove('showSidebar');
}
});