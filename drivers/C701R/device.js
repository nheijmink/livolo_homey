'use strict';

const Homey = require('homey');
const util = require('homey-rfdriver').util;
const WallSwitchDevice = require('../../lib/devices/livolo/wall_switch.js');

// To extend from another class change the line below to
// module.exports = RFDevice => class AWST8802Device extends MyGenericDevice(RFDevice) {
// and define MyGenericDevice like so
// module.exports = RFDevice => class MyGenericDevice extends RFDevice {
module.exports = RFDevice => class C701RDevice extends WallSwitchDevice(RFDevice) {

    onRFInit() {
        super.onRFInit();

        // Init your device here
    }

};