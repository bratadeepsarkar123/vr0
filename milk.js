class Milk{
    constructor(){
        mRef=database.ref('food');
        mRef.on("value",function(data){
            foodNo=data.val();
        });

        this.feed=createButton('Feed');
        this.feed1=createButton('REFILL');
        this.r;
        this.click=0;
    };
    update(state){
        database.ref('/').update({
            food:state
            
        })
    }
    display(){
       
     var h=30*width/1366
     var w=height/3   
        for(var a=0;a<foodNo;a++){
            if(a%10===0){
                h=30*width/1366
                w=w+70*height/678
            }
            this.r= image(milkPng,h,w,100*width/1366,100*width/1366)
            //this.r.scale(1*width/1366)
            h=h+70*width/1366;       
        }
        
      this.feed.position(width*2/4,height*3/4+100*height/678);
      this.feed.size(100*width/1366,50*height/678)
      this.feed1.position(width*1/4,height*3/4+100*height/678);
      this.feed1.size(100*width/1366,50*height/678)
     // this.feed1.color(0)
      this.feed.mousePressed(()=>{
        if(gameState===1 && foodNo!=0 ){
            if(lastHr>12 && hour()<12 ){
                if(lastHr-12+lastMin/100<hour()+12+minute()/100){
               
                    bo=1
                    clear();
                    foodNo=foodNo-1
                    milk1.update(foodNo)
                    this.click++
                    lastHr=database.ref('time').update({
                        hour:hour(),
                        minute:minute()
                    })
                }   
            }else{
                if(lastHr+lastMin/100<hour()+minute()/100){
               
                    bo=1
                    clear();
                    foodNo=foodNo-1
                    milk1.update(foodNo)
                    this.click++
                    lastHr=database.ref('time').update({
                        hour:hour(),
                        minute:minute()
                    })
                }
            }
            
            
            
           
        }
       
      })
      this.feed1.mousePressed(()=>{
        if(gameState===1 && foodNo<=29){
            if(foodNo<11 ){
                clear();
                foodNo=30
                milk1.update(foodNo)
            }
            
        }
      })
    
    
    
    }
    

    
}