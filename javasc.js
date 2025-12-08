const darkBtn=document.createElement("button");
darkBtn.textContent="🌙 Dark Mode";
darkBtn.style.position="fixed";
darkBtn.style.bottom="20px";
darkBtn.style.right="20px";
darkBtn.style.padding="12px 16px";
darkBtn.style.background="#2b7cff";
darkBtn.style.color="white";
darkBtn.style.border="none";
darkBtn.style.borderRadius="8px";
darkBtn.style.cursor="pointer";
darkBtn.style.zIndex="1000";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
  darkBtn.textContent=document.body.classList.contains("dark-mode")?"☀️ Light Mode":"🌙 Dark Mode";
});

const topBtn=document.createElement("button");
topBtn.textContent="↑ Top";
topBtn.style.position="fixed";
topBtn.style.bottom="70px";
topBtn.style.right="20px";
topBtn.style.padding="10px 14px";
topBtn.style.background="#1f5fcc";
topBtn.style.color="white";
topBtn.style.border="none";
topBtn.style.borderRadius="8px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="1000";
document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{
  topBtn.style.display=window.scrollY>300?"block":"none";
});

topBtn.addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"});
});
document.querySelectorAll("nav a").forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});
