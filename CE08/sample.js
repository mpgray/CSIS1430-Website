/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
                function firstFun(money){
                    var car;
                    var cost = money;
                        if(cost > 50000){
                            car = "BMW";
                        }else{
                            car = "Honda";
                        };
                    document.write(car + "<br/>");
                    for( i = 10; i > -1; i --){
                        console.log(i);
                        document.write(i + "<br/>");
                    }
                    document.write("blast off!!!!");
                }
            firstFun(10000);

