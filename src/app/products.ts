export class Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  reviews: UserReview[];
}

export class UserReview {
  author: string;
  title: string;
  content: string;
  rating: number;
}

