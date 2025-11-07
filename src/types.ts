export type Ingredient = {
    amount?: string;
    text: string;
};

export interface Recipe {
    id: string;
    title: string;
    description: string;
    greenChoice?: boolean;
    image?: string;
    ingredients?: Ingredient[]
    category?: string;
}
