"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CampResponse(...camps) {
    camps.forEach(element => console.log(element.org + " : " + element.reqDate + " : " + element.phone
        + "Email :" + element.email));
}
const cmps = { name: 'Test', org: 'Verizon', reqDate: new Date(), phone: 9600706968 };
const cmps1 = { name: 'Chris', org: 'Vdsi', reqDate: new Date(), phone: 9840050832, email: "smthsemon@gmail.com" };
console.log(CampResponse(cmps, cmps1));
