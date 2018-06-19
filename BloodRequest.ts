export class DonationRequest
{
private reqGrp : string;
private reqUnit : number;
private reqHsp :string;

    constructor(reqGrp:string, reqUnit :number,reqHsp :string, private reqDate:Date)
{
this.reqGrp =reqGrp;
this.reqUnit = reqUnit;
this.reqHsp =reqHsp;
this.reqDate = reqDate;
}

toString()
{
    return `Request Group : ${this.reqGrp} , Request Date : ${this.reqDate}`;
}
}

