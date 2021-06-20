class Dogs{
    constructor(x,y,w,h){
        this.dog=createSprite(x,y,w,h);
      //  this.dog.hide();
      this.x=x;
      this.y=y;
      
    }
    display(){
        if(bo===0){ this.dog.addImage(dogPng);} else if(bo===1){ this.dog.addImage(hDogPng);}           
        this.dog.scale=0.4*width/1366
    }
    
}