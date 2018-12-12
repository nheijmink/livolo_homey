'use strict';

const livolo = require('./livolo');
const util = require('homey-rfdriver').util;

module.exports = RFDevice => class Remote extends livolo(RFDevice) {

	static payloadToData(payload) {
		const data = super.payloadToData(payload);
		if (!data) return data;

		data.id = data.address;
		return data;
	}

	onFlowTriggerFrameReceived(args, state) {
		if (args.unitchannel) {
			args.unit = args.unitchannel.slice(0, 2);
			args.channel = args.unitchannel.slice(2, 4);
			delete args.unitchannel;
		}
		if (args.unit === 'g') {
			args.unit = '00';
			args.group = 1;
			delete args.channel;
		} else {
			args.group = 0;
		}
		return super.onFlowTriggerFrameReceived(args, state);
	}

	assembleDeviceObject() {
		// Ignore check for group button
		return super.assembleDeviceObject(true);
	}
};