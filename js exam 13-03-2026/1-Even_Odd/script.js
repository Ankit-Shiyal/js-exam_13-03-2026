
document.getElementById("form").addEventListener("submit", (e)=>{
  e.preventDefault()
  
  let num = Number(document.getElementById("num").value)
  
  let odd = "";
  let even = "";
      
    if(num %2 ===0){
       document.getElementById("result").innerHTML =
    "Even Numbers " + even 
    }else{
      document.getElementById("result").innerHTML =
    "Odd Numbers " + odd 
    }
    
})