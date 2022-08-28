class SeatAssignment{
    [seatNumber:string]:string;
}

const seatAssignment = new SeatAssignment();
seatAssignment.A1 = 'John';
seatAssignment['A2'] = 'Alex';


//how to get seat now?