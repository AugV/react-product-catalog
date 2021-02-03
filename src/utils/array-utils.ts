export enum SortOrder {
    ASCENDING = 'ascending',
    DESCENDING = 'descending',
}

class ArrayUtils {
    public static compare(compareFieldName: string, direction: SortOrder)  {
        return direction === SortOrder.ASCENDING
            ? (a: any, b: any) => (a[compareFieldName] < b[compareFieldName]) ? -1 : (a[compareFieldName] > b[compareFieldName]) ? 1 : 0
            : (a: any, b: any) => (a[compareFieldName] > b[compareFieldName]) ? -1 : (a[compareFieldName] < b[compareFieldName]) ? 1 : 0;
    };
}

export { ArrayUtils }
