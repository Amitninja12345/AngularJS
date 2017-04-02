var app= angular.module("calculatorApp" ,[]);

app.controller("CalculatorCtrl",CalculatorCtrl);

function CalculatorCtrl() {
	
	
	this.myList=[
	
	{'name':"amit", 'age':27},
	{'name':"amit1", 'age':26},
	{'name':"amit2", 'age':25},
	{'name':"amit3", 'age':24}

	
];
	
	this.buttonClicked=function(button){
		this.selectedOperation=button;
	}

	this.resultValue=0;
	
	
	this.computeResult=function(){
		var number1=parseFloat(this.input1);
		
		var number2=parseFloat(this.input2);
		

		if(this.selectedOperation==='+'){
			
			this.resultValue=number1 + number2;
			
			
		}
	

		else if(this.selectedOperation==='-'){
		  
			this.resultValue=number1-number2;
			
			
		}
		
		else if(this.selectedOperation==='*'){
			  
			this.resultValue=number1*number2;
			
			
		}
		
		else if(this.selectedOperation==='/'){
			  
			this.resultValue=number1/number2;
			
			
		}
	
		
		
		
		
		
	

	}
}