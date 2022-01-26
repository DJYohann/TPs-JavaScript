function loopZeroToFour() {
	for (let i = 0 ; i < 5 ; ++i) {
		if (i === 0) {
			displayLog(i, green);
		}
		else {
			if (i % 2 === 0) {
				displayLog(i, red);
			}
			else {
				displayLog(i, blue);
			}
		}

	}
}