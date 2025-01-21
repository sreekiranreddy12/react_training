function x(){
    let a=10;
    const b=20;
    console.log(a,b);
    function y(){
        let p= "js";
        const q= "react js"
        console.log(p,q);
        function z(){
            const username = "sree kiran reddy";
            console.log(username)
            console.log(a);
            console.log(b);
        }
        z();
    }
    y();
}
x();