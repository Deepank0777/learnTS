interface Calendar{
    name:string,
    addEvent():void,
    removeEvent():void
}

interface ChatCalendar extends Calendar{
    chatRoom():void
}

class GoogleCalendar implements ChatCalendar{
    constructor(public name:string){

    }
    chatRoom(): void {
        throw new Error("Method not implemented.");
    }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
    oneExtraMethod():void{
        
    }
}