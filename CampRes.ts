import {DonationCamp} from './Camp';
function CampResponse(...camps:DonationCamp[])
{
camps.forEach(element => console.log(element.org+" : "+ element.reqDate  +" : "+element.phone
+"Email :"+element.email)
    
);
}
const cmps : DonationCamp ={name:'Test',org:'Verizon',reqDate : new Date(),phone :9600706968};
const cmps1 : DonationCamp ={name:'Chris',org:'Vdsi',reqDate : new Date(),phone :9840050832,email : "smthsemon@gmail.com"};
console.log(CampResponse(cmps,cmps1));