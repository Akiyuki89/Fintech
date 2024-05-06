import { IVenda } from "./IVenda";

export interface VendaSemData extends Omit<IVenda, "data"> {}
