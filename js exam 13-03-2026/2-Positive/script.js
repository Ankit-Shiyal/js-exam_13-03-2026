
document.getElementById("form").addEventListener("submit", (e)=>{
  e.preventDefault()
  
  let num = Number(document.getElementById("num").value)
  
  let Zero = "";
  let  Negative = "";
  let Positive ="";
  
    if(num>0){
       document.getElementById("result").innerHTML =
    "Number is Positive " + Positive 
    }
  
  else if(num<0){document.getElementById("result").innerHTML =
    "Number is Negative  " + Negative 
    }
  
  else{
       document.getElementById("result").innerHTML =
    "Numbers is zero " + Zero 
    }
    
})