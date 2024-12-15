export type User = {
    id: string;
    email: string;
    password: string;
    balance: number;
    isBanned: boolean;
    createdAt: Date;
    updatedAt: Date;
    purchases: Product[];
    cart: Product[];
}

export type Product = {
    id: string;
    name: string;
    description: string;
    pictures: string[];
    price: number;
    currency: string;
    category: string;
    brand: string;
    sku: string;
    stock: number;
    tags: string[];
    rating: number;
    reviewsCount: number;
    discount: number;
    isAvailable: boolean;
    warranty: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    userId: string;
    items: CartItem[];
    updatedAt: Date;
}

export interface Order {
    id: string;
    userId: string;
    items: {
      productId: string;
      quantity: number;
      priceAtPurchase: number;
    }[];
    totalAmount: number;
    currency: string;
    paymentMethod: 'credit_card' | 'paypal' | 'crypto';
    status: 'pending' | 'completed' | 'canceled';
    createdAt: Date;
    completedAt?: Date;
}

export interface LicenseKey {
    key: string;
    productId: string;
    userId: string;
    issuedAt: Date;
    expiresAt?: Date; 
}

export interface Review {
    reviewId: number;
    userId: number;
    productId: number;
    score: number;
    description: string;
    isModerated: boolean;
    likes: ReviewLike[];
}

export interface ReviewLike {
    likeId: number;
    reviewId: number;
    userId: number;
    type: "like" | "dislike";
}