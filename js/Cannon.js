class Cannon {

    constructor (x,y,w,h, angle){
    
        // atributos:
    
        this.x =x;
        this.y=y;
        this.w =w;
        this.h=h;
        this.angle = angle ;

    }


display(){

fill("gray");

push()

translate(this.x, this.y);
rotate(this.angle);
rect(-10,-20,this.w, this.h);

pop()




arc(this.x -35, this.y+80, 150,230,PI, TWO_PI);



  }


}