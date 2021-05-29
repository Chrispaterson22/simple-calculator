describe('calculator.js test suite', () => {
	describe('Calculator', () => {
		let calculator
		let calculator2

		beforeEach(() => {
			// Anything inside this block executes before each spec (it) inside this describe.
			calculator = new Calculator()
			calculator2 = new Calculator()
		})

		afterEach(() => {
			// Anything inside this block executes after each spec (it) inside this describe.
		})

		// toBe
		// toBeFalsy
		it('should initialize the total', () => {
			expect(calculator.total).toBe(0)
			expect(calculator.total).toBeFalsy()
		})

		// toEqual
		// toBeTruthy
		// toContain
		// Custom Matcher
		it('can be instantiated', () => {
			jasmine.addMatchers(customMatchers)

			expect(calculator).toBeCalculator()
			expect(2).not.toBeCalculator()
			expect(calculator).toBeTruthy()
			expect(calculator2).toBeTruthy()
			expect(calculator).toEqual(calculator2)
			expect(calculator.constructor.name).toContain('ator') // 'Calculator'
		})

		// use of: not
		it('instantiates unique object', () => {
			expect(calculator).not.toBe(calculator2)
		})

		// toBeDefined, toBeUndefined
		it('has common operations', () => {
			expect(calculator.add).toBeDefined()
			expect(calculator.subtract).toBeDefined()
			expect(calculator.multiply).toBeDefined()
			expect(calculator.divide).toBeDefined()
		})

		// toBeNull
		it('can overwrite total', () => {
			calculator.total = null
			expect(calculator.total).toBeNull()
		})

		describe('add()', () => {
			it('should add numbers to total', () => {
				calculator.add(5)
				// expect to be 5
				expect(calculator.total).toBe(5)
			})

			// toMatch
			// match anything! with jasmine.anything() only fails for null and undefined
			// 3rd party toBeNumber
			it('returns the total', () => {
				calculator.total = 50

				expect(calculator.add(20)).toBe(70)
				expect(calculator.total).toMatch(/-?\d+/)
				expect(calculator.total).toBeNumber()

				// asymmetric matchers
				// not equal in each side!
				expect(calculator.total).toEqual(jasmine.anything())
			})
		})

		describe('subtract()', () => {
			it('should subtract numbers from total', () => {
				const calculator = new Calculator()
				calculator.total = 30
				calculator.subtract(5)

				expect(calculator.total).toBe(25)
			})
		})

		describe('multiply()', () => {
			it('should multiply total by number', () => {
				const calculator = new Calculator()
				calculator.total = 100
				calculator.multiply(2)

				expect(calculator.total).toBe(200)
			})

			// toBeNaN
			it('does not handle NaN', () => {
				const calculator = new Calculator()

				calculator.total = 20
				calculator.multiply('a')

				expect(calculator.total).toBeNaN()
			})
		})

		describe('divide()', () => {
			it('should divide total by number', () => {
				const calculator = new Calculator()
				calculator.total = 200
				calculator.divide(2)

				expect(calculator.total).toBe(100)
			})

			// toThrow
			// toThrowError
			it('handles divide by zero', () => {
				const calculator = new Calculator()

				expect(() => calculator.divide(0)).toThrow()
				expect(() => calculator.divide(0)).toThrowError(Error)
				expect(() => calculator.divide(0)).toThrowError(
					Error,
					'Cannot divide by zero'
				)
			})
		})
	})
})
