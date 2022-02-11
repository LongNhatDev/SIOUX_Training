class Bird{
    fly(){
        console.log("I can fly");
    }
}

class Eage extends Bird{

}
class Penguin extends Bird{
    fly(){
        throw new KhumBietBay
    }
}
class Ostrich extends Bird{
    fly(){
        throw new KhumBietBay
    }
}

const eage = new Eage();
const penguin=new Penguin();
const ostrich=new Ostrich();

function checkFlying(birds){
    birds.forEach(bird =>{
        bird.fly();
    });
}

const birds = [eage,penguin,ostrich];
checkFlying(birds);