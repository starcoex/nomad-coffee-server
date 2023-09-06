import { CoffeeShopPhoto } from "../generated/graphql";

export type CoffeeShopModel = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  userId: number;
  // coffeeshopPhotos: CoffeeShopPhoto[];
};

// export type CommentModel = {
//   id: number;
//   payload: string;
//   userId: number;
//   photoId: number;
// };
