export interface Product {
  id: string;
  name: string;
  price: number;
  emoji: string;
  description: string;
  category: 'sandwich' | 'drink' | 'snack' | 'dessert' | 'fruit' | 'protein' | 'energy';
  available: boolean;
  preparationTime: number; // dakika
  nutritionInfo?: {
    calories: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
}

export interface Package {
  id: string;
  name: string;
  description: string;
  emoji: string;
  targetAudience: string;
  price: number;
  category: 'spor' | 'ders' | 'sosyal' | 'aciktim';
  items: {
    productId: string;
    quantity: number;
  }[];
  tags: string[];
  color: string; // gradient color for UI
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: {
    name: string;
    phone: string;
    location: {
      lat: number;
      lng: number;
      description: string;
    };
  };
  status: 'pending' | 'preparing' | 'on-way' | 'delivered';
  orderTime: Date;
  estimatedDelivery: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  favoriteProducts: string[];
}