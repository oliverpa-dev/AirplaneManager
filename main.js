
console.log("Airplane Manager");

class Airplane {
    constructor(iD, type, flightAttandant, pilot, businessClassSeat, economyClassSeat) {
        this.iD = iD;
        this.type = type;
        this.flightAttandant = flightAttandant;
        this.pilot = pilot;
        this.businessClassSeat = businessClassSeat;
        this.economyClassSeat = economyClassSeat;
    }
    airplaneInfo() {
        return "ID: " + this.iD + ", "  + "Type: " + this.type + ", " + "Flight attandants: " + this.flightAttandant+ ", " + "Pilots: " + this.pilot+ ", " + "Business Class Seat: " + this.businessClassSeat+ ", " + "Economy Class Seat: "  + this.economyClassSeat;
    }
}


let airplane =  new Airplane("54312", "Boeing", 6, 4, 34, 32);

let button = document.getElementById("demo2").addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("demo").innerHTML = airplane.airplaneInfo();
}
