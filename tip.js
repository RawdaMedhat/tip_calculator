//cash the variables
let bill = document.getElementById("tipBill");
let servicePeople = document.getElementById("servPeople");
let numPeople = document.getElementById("tipPeople");
let tipBtn = document.getElementById("tipBtn");
let tipReset = document.getElementById("tipBtn2");
let form = document.getElementById("tipForm");
     
// create class of tip calculator 

class TipBill {
    constructor (bill ,numPeople , servicePeople){
        this.bill=bill;
        this.numPeople = numPeople;
        this.servicePeople=servicePeople;
    }
    // method for calculate data
        clacTip(){
            var calcTip = (this.bill / this.numPeople) * this.servicePeople;
            calcTip = Math.round(calcTip * 100) / 100;
            return calcTip;
        }
    //method for check input 
        checkData(){
        if(bill.value == "" || numPeople.value == "" ){
            alert (" please enter your data please ....");
            document.getElementById("result").style.display="none";
        }
         else if(bill.value <= 0 || numPeople.value <= 0 ){
            alert (" please enter  positive data please ....");
             this.clearData();
             document.getElementById("result").style.display="none";
        }
        else {
            this.clacTip();
            document.getElementById("result").style.display="block";
             
            }
            
        }
    // method for calculate data
        clacTip(){
            var calcTip = (this.bill / this.numPeople) * this.servicePeople;
            calcTip = Math.round(calcTip * 100) / 100;
            return calcTip;
        }
    //  method for clear input 
    clearData(){
        bill.value = "" ;
        numPeople.value="";
        
        }
     
}

    //for display output
        form.addEventListener("submit", function(e) {
        e.preventDefault();
           let calculatorTip = new  TipBill (bill.value , numPeople.value , servicePeople.value);
            calculatorTip.checkData();
            var showData =document.getElementById("result");
            var temp ="";
            temp+=`<h3>the amount is `+calculatorTip.clacTip()+` $</h3>`
           showData.innerHTML=temp;
              
        });

    //call for reset data 
       tipBtn2.addEventListener("click", function(e) {
            e.preventDefault();
           // reset data ....
            form.reset();
           document.getElementById("result").style.display="none";
        });