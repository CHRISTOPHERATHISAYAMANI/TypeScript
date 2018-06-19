"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BloodRequest_1 = require("./BloodRequest");
function bloodRes(dr) {
    console.log(dr.toString());
}
let dr = new BloodRequest_1.DonationRequest('Test', 1, 'MIOT', new Date());
console.log(bloodRes(dr));
