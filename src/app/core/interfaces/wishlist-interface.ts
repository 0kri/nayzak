import { WishlistDescription } from "./wishlist-description";

export interface WishlistInterface {
    img: string;
    description: WishlistDescription;
    price: number | string;
}
