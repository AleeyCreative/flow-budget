import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatFilter;
  quantity?: IntNullableFilter;
};
