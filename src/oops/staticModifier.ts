//static modifier belongs to class not with created object
class Rides{
    private static _activeRides:number = 0;

    start(){ Rides._activeRides++;}
    stop(){ Rides._activeRides--;}

    static get ride(){
        return Rides._activeRides;
    }
}


const ride1 = new Rides();
ride1.start();

const ride2 = new Rides();
ride2.start();

//static ride called with class name
console.log(Rides.ride)