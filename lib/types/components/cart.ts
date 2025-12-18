export interface CartHeaderProps {
  title: string;
}

export interface IndividualCartItemProps {
  name: string;
  quantity: number;
  price: number;
  bgColor?: string;
  productId: number;
}
