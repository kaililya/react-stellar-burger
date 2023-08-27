import { RootState } from "../../utils/types";

export const ingredientsSelector = (state:RootState) => state.data.ingredients;