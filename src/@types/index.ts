export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface UsersState {
  loading: boolean;
}

export interface ProductsState {
  loading: boolean;
  data: Array<Product>;
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

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}
