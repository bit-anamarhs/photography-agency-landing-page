export interface Award {
  image: string;
  year: string;
  title: string;
  description: string;
}

export interface ProductProps {
product: {
  title: string;
  description: string;
  icon: React.ReactNode;
  links: string;
  subProducts?: {
    title: string;
    description: string;
    links: string;
  }[];
};
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface Specifications {
  dimensions: string;
  weight: string;
  materials: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  brand: string;
  size: string;
  color: string;
  image: string;
  description: string;
  specifications: Specifications;
  reviews: Review[];
  stock: number;
}
