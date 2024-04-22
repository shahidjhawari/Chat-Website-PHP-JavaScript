let msgdiv=document.querySelector(".msg");
setInterval(() => {
  fetch("readMsg.php").then(
    r=>{
     if(r.ok){
      return r.text();
     }
    }
  ).then(
    d=>{
      msgdiv.innerHTML=d;
    }
  )
}, 500);