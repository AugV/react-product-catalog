export interface PhoneResponse {
    brand: string;
    displayName: string;
    contentKey: string;
    price: number;
    pricePrefix: string;
    priceSuffix: string;
    internalMemoryGB: number[],
    dualSIM: string;
    screenSize: string;
    networkTechnology: string[];
    colorOptions: {
        name: string;
        hex: string;
    }[];
    imgUrl: string,
    link: string,
}