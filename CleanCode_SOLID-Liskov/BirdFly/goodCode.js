class Fly{
    fly(){
        console.log("i can fly");
    }
}
class Swim{
    swim(){
        console.log("i can swim");
    }
}
class Run{
    run(){
        console.log("i can Run");
    }
}

class Eage extends Fly{
}

class Penguin extends Swim{
}

class Ostrich extends Run{
}

function checkBirdCanFly(bird){
    bird.fly();
}
function checkBirdCanSwim(bird){
    bird.swim();
}
function checkBirdCanRun(bird){
    bird.run();
}

const eage = new Eage();
const penguin = new Penguin();
const ostrich = new Ostrich();


checkBirdCanFly(eage);
checkBirdCanSwim(penguin);
checkBirdCanSwim(ostrich);




