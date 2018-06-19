"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DonationRequest {
    constructor(reqGrp, reqUnit, reqHsp, reqDate) {
        this.reqDate = reqDate;
        this.reqGrp = reqGrp;
        this.reqUnit = reqUnit;
        this.reqHsp = reqHsp;
        this.reqDate = reqDate;
    }
    toString() {
        return `Request Group : ${this.reqGrp} , Request Date : ${this.reqDate}`;
    }
}
exports.DonationRequest = DonationRequest;
