export interface AcessoryProps {
    type: string;
    name: string;
  }
  
  export interface CarProps {
    id: string;
    brand: string;
    name: string;
    about: string;
    rent: {
      period: string;
      price: number;
    };
    fuel_type: string;
    thumbnail: string;
    accessories: AcessoryProps[];
    photos: string[];
  }
  
export interface SingleCarProps {
  car: CarProps
}