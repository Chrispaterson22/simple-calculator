describe('calculator.js test suite', () => {
	it('should add numbers to total', () => {
		const calculator = new Calculator()
		calculator.add(5)
		// expect to be 5
		expect(calculator.total).toBe(5)
	})
	it('should subtract numbers from total', () => {
		const calculator = new Calculator()
		calculator.total = 30
		calculator.subtract(5)

		expect(calculator.total).toBe(25)
	})
	it('should multiply total by number', () => {
		const calculator = new Calculator()
		calculator.total = 100
		calculator.multiply(2)

		expect(calculator.total).toBe(200)
	})
	it('should divide total by number', () => {
		const calculator = new Calculator()
		calculator.total = 200
		calculator.divide(2)

		expect(calculator.total).toBe(100)
	})
})
