import { ClassNames } from './ClassNames'

describe('first', () => {
    test('should first', () => {
        const result = 'class'

        expect(ClassNames('class', {}, [])).toBe(result)
    })
})
