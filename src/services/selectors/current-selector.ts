import { RootState } from "../../utils/types";

export const acceptedOrderSelector = (state:RootState) => state.current.acceptedOrder;
export const selectedIngredientSelector = (state:RootState) => state.current.selectedIngredient;