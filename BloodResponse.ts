import {DonationRequest} from './BloodRequest';

 function bloodRes(dr:DonationRequest) :void
{
    
    console.log(dr.toString())
}

let dr= new DonationRequest('Test',1,'MIOT', new Date());
console.log(bloodRes(dr));