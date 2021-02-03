import { ArrayUtils, SortOrder } from './array-utils';

test('sorts object list by string attribute in ASCENDING order', () => {
    const objectArray = [
        { stringAttribute: 'b' },
        { stringAttribute: 'a' },
        { stringAttribute: 'd' },
        { stringAttribute: 'c' },
    ]
    
    const sortedArray = objectArray.sort(ArrayUtils.compare('stringAttribute', SortOrder.ASCENDING))

    expect(sortedArray[0].stringAttribute).toBe('a');
});

test('sorts object list by string attribute in DESCENDING order', () => {
    const objectArray = [
        { stringAttribute: 'b' },
        { stringAttribute: 'a' },
        { stringAttribute: 'd' },
        { stringAttribute: 'c' },
    ]

    const sortedArray = objectArray.sort(ArrayUtils.compare('stringAttribute', SortOrder.DESCENDING))

    expect(sortedArray[0].stringAttribute).toBe('d');
});