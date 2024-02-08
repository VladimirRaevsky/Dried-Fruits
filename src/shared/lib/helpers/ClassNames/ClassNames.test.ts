import { describe, expect, test } from '@jest/globals'

import { ClassNames } from '.'

describe('Checking the function', () => {
    test('should return one class', () => {
        const result = 'class'

        expect(ClassNames('class', {}, [])).toBe(result)
    })

    test('should return all three classes', () => {
        const result = 'class hover class2'

        expect(ClassNames('class', { hover: true }, ['class2'])).toBe(result)
    })

    test('should return two classes', () => {
        const result = 'class class2'

        expect(ClassNames('class', { hover: false }, ['class2'])).toBe(result)
    })
})
