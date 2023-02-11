const res = document.getElementById("result");
console.log(res.innerHTML);
let buttons = document.querySelectorAll("button");
let num1 = "",
num2 = 0;
let symbol = "";
let ans = 0;
let flag = 0;
dotcount = 0;
let symbolctr = "";
let ctr=0;
for (const button of buttons) {
  button.addEventListener("click", function () {
    console.log("button pressed");
    console.log(button.value);
    let value = button.value;
    if (value == "Switch") {
      
      if(ctr==0){
      res.innerHTML = "";
      res.style.display="none"
      ctr=1;
      }
      else{
        res.innerHTML="0"
        res.style.display="";
        ctr=0;
      }
      num1 = "";
      dotcount = 0;
      symbolctr=0;
    } else if (value == "reset") {
      res.innerHTML = "0";
      num1 = "";
      dotcount = 0;
      symbolctr=0;
    } else if (value == "delete") {
      let lastchar = num1[num1.length-1]
      if(lastchar ===".") 
      dotcount=0;
      else if (lastchar == "+" || lastchar == "-" || lastchar == "*" || lastchar == "/")
      symbolctr=0
      num1 = num1.slice(0, -1);

      res.innerHTML = num1;
    }
    else if(value=="."){
        if(dotcount!=1)
        {
          num1 += value;
        res.innerHTML = num1;
            res.innerHTML=num1;
        }
        dotcount=1;
    }
    else if (value == "+" || value == "-" || value == "*" || value == "/") {
      dotcount=0;
      if (symbolctr == 0) {
       
        symbol = value;
        num1 += value;
        res.innerHTML = num1;
        symbolctr = 1;
      } else if(symbolctr==1){   
        doubleop= num1[num1.length-1]
         if( doubleop== "+" || doubleop == "-" || doubleop == "*" || doubleop == "/")  {
          num1=num1.substring(0,num1.length-1);
          console.log(num1);
          num1+=value;
          console.log(num1);
          symbol=value;
          res.innerHTML=num1;
          symbolctr=1;
        } 
        else if(doubleop=="="){
          num1=num1.substring(0,num1.length-1);
          res.innerHTML=num1;
          symbolctr=0;
        }
        else{
          calculate();
          symbol=value;
        num1=num1+symbol;
        res.innerHTML=num1;
        symbolctr=1;
        }
      }
    console.log(num1+ " "+ res.innerHTML+" "+symbolctr+ " "+ symbol);
    }
      if(value == "=" ) {
        if(symbolctr!=0)
           calculate();
      }
    if (value >= "0" && value <= "9") {
      num1 += value;
      res.innerHTML = num1;
    }
    
    function calculate() {
      let a,b;
      let numarray = num1.split(symbol);
      console.log(numarray);
      if(num1[0]=='-' && numarray.length==3){
       a=Number(0-numarray[1]);
        b=Number(numarray[2]);
      }
      else{
      a=Number(numarray[0]);
      b=Number(numarray[1]);
      }
      console.log(a +" "+ b);
      switch (symbol) {
        case "+":
          ans = a+b;
          break;
        case "-":
          ans = a-b;
          break;
        case "*":
          if(a==="" || b==="")
          ans=a;
          else if(isFinite(a)==false)
          ans=0;
          else  
          ans = a*b;
          break;
        case "/":
          if(a==="")
          ans=a;
          else  
          ans = a/b;
          break;
      }
      num1 = ans;
      console.log(num1);
      res.innerHTML=num1;
      symbolctr=0;
    }
  });
}
