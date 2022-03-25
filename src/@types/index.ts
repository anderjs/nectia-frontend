export interface AuthState {
  user: null
}

export interface UsersState {
  loading: boolean
}

export interface ProductsState {
  loading: boolean
  data: Array<Product>
}

export interface StoreRootApplication { 
  authentication: AuthState;
  products: ProductsState;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  sku: number;
  createdAt: Date;
  updatedAt: Date;
}