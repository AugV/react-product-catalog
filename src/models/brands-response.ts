export interface BrandsResponse {
    id: string;
    headline: string;
    options: {
        id: string;
        displayName: string;
        displayImageUrl: string;
    }[];
}
