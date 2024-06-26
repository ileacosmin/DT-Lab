function decode(bits) {
	var z8 = parity(bits[8] + bits[9] + bits[10] + bits[11] + bits[12] + bits[13] + bits[14]);
	var z4 = parity(bits[4] + bits[5] + bits[6] + bits[7] + bits[12] + bits[13] + bits[14]);
	var z2 = parity(bits[2] + bits[3] + bits[6] + bits[7] + bits[10] + bits[11] + bits[14]);
	var z1 = parity(bits[1] + bits[3] + bits[5] + bits[7] + bits[9] + bits[11] + bits[13]);
	var z0 = parity(bits[0] + bits[1] + bits[2] + bits[3] + bits[4] + bits[5] + bits[6] + bits[7] + bits[8] + bits[9] + bits[10] + bits[11] + bits[12] + bits[13] + bits[14]);

	var errorPosition = z0 * 0 + z1 * 1 + z2 * 2 + z4 * 4 + z8 * 8;

	var errorDetected = false;
	if (errorPosition != 0) errorDetected = true;
	if (errorDetected) {
		bits[errorPosition - 1] = parity(bits[errorPosition - 1] + 1);
	}
	return { errorCorrected: errorDetected, errorPosition: errorPosition - 1, bits: bits };
}

parity = function(number){
	return number % 2;
}

exports.decode = decode;
