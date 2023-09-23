import { ICategory } from "./category.model";

export interface ISubcategory{
    id:number;
    subcategoryName:string;
    category:ICategory;
}