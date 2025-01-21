for(let i =1;i<=5;i++){
    for(let j=1;j<=5;j++){
        
        document.writeln("*");
        
    
}
document.write("<br>");
}
document.write("<br >")
for(let i =1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i>=j){
        document.writeln("*");
        }
        else{
            document.write("&nbsp;")
        }
    
    
}
document.write("<br>");
}
document.write("<br >")
for(let i =1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==j || i+j==6){
        document.writeln("*");
        }
        else{
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        }
    
    
}
document.write("<br>");
}