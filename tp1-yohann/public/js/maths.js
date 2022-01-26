function loopZeroToFour() {
	for (let i = 0 ; i < 5 ; ++i) {
		if (i === 0) {
			logGreen();
		}
		else {
			if (i % 2 === 0) {
				logRed();
			}
			else {
				logBlue();
			}
		}

	}
}