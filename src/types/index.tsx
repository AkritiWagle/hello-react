export interface Customer {
  id: number;
  name: string;
  age: number;
  phone: string;
  address: string;
  isFollowing: boolean;
}

export interface CustomerFormValues {
  name: string;
  age: number;
  phone: string;
  address: string;
  isFollowing: boolean;
}
