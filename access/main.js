//Dynamic Title
const currentTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "You're away";
});
window.addEventListener("focus", () =>{
  document.title = currentTitle;
});

//Onclick
const btn=document.getElementsByClassName('container')
for(let i=0;i<btn.length;i++){
  btn[i].onclick = function(){
    this.classList.toggle('active');
    }
}