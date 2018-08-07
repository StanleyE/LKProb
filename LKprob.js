 
 
 let jsx= ['a','b','c','d','e','f','g','h','i','j','k'];
 
 function generator(jsx) {
    let tank = [];
    let paragraph = [];
    //main loop
    for (let i = 0; i < 8; i++) {
        //generate random number
        let random = Math.floor(Math.random()*jsx.length);
        //if tank array don't have a number just push first number
        if (tank.length < 1) {
            tank.push(random);   
            //if tank array has an index greater than 1         
        } else {
            //compare new random to other numbers in array, if duplicate i-1 
            //if there is no duplicates then push number to array
            let beer = 0;
           tank.forEach((element)=>{
                if (element === random) {
                    beer++;
                }
           });
           if(beer > 0){
                i--;
           } else{
               tank.push(random);
           }
        }
    };
    console.log(tank);
    tank.forEach((ele)=>{
        paragraph.push(jsx[ele]);
    });
    console.log (paragraph);
}

generator(jsx);
