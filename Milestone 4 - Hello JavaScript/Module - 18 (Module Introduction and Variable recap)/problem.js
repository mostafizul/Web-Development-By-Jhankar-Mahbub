var marks = prompt(parseFloat("Enter your marks: "));
if(marks >= 0 && marks <= 100){
if(marks>90){
    document.write("Your Grade is: AA")
}else if(marks>80 && marks<=90){
    document.write("Your Grade is: AB")
}
else if(marks>70 && marks<=80){
    document.write("Your Grade is: BB")
}
else if(marks>60 && marks<=70){
    document.write("Your Grade is: BC");
}
else if(marks>50 && marks<=60){
    document.write("Your Grade is: CC");
}
else if(marks>40 && marks<=50){
    document.write("Your Grade is: CD");
}
else if(marks>30 && marks<=40){
    document.write("Your Grade is: DD");
}else if(marks<=30){
    document.write("Your Grade is: FF");
}
}else{
    document.write("Your Grade is Invalid");
}




