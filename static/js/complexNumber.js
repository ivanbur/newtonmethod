class Complex {
	constructor(num, iNum) {
		this.num = num;
		this.iNum = iNum;
	}

	add(cNumber) {
		// this.num += cNumber.num;
		// this.iNum += cNumber.iNum;

		return new Complex(this.num + cNumber.num, this.iNum + cNumber.iNum);
	}

	subtract(cNumber) {
		// this.num -= cNumber.num;
		// this.iNum -= cNumber.iNum;

		return new Complex(this.num - cNumber.num, this.iNum - cNumber.iNum);
	}

	multiply(cNumber) {
		// let oldINum = this.iNum;

		// this.iNum = this.num * cNumber.iNum + cNumber.num * this.iNum;
		// this.num = this.num * cNumber.num - cNumber.iNum * oldINum;

		return new Complex(this.num * cNumber.num - cNumber.iNum * this.iNum, this.num * cNumber.iNum + cNumber.num * this.iNum)
	}

	divide(cNumber) {
		let oldINum = this.iNum;
		let oldNum = this.num;

		let numerator = this.multiply(cNumber.conjugate());
		let denominator = cNumber.multiply(cNumber.conjugate()).num;

		return new Complex(numerator.num / denominator, numerator.iNum / denominator);
	}

	pow(exponent) {
		let currentComplex = this;

		if (exponent == 0) {
			return 1;
		}

		if (exponent >= 1) {
			for (let i = 1; i < exponent; i++) {
				currentComplex = currentComplex.multiply(this);
			}
		}

		if (exponent < 0) {
			// TODO: negative exponents
		}

		// TODO: exponents that are not integers
		
		return currentComplex;
	}

	conjugate() {
		return new Complex(this.num, -this.iNum);
	}

	equals(cNumber) {
		return (this.num == cNumber.num && this.iNum == cNumber.iNum);
	}
}