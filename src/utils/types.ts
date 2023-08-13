export type TIngredient = {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly  __v: number;
};

export type TIngredientAddUniqueId = TIngredient & {
  readonly unique_id: string;
};

export type TOrderData = {
  readonly name:string;
  readonly number:number;
};

export type TUserData = {
  readonly email: string;
  readonly name: string;
};