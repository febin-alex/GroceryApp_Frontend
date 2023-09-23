import { ICategory } from "./category.model";
import { ISubcategory } from "./subcategory.model";

export interface IProduct{
    id:number;
    productName:string;
    description:string;
    unitPrice:number;
    discountedPrice:number;
    unitsinStock:number;
    unitType:string;
    discontinued:number;
    category:ICategory;
    subcategory:ISubcategory;
    createdDate:Date;
    modifiedDate:Date;
    productUrl:string;
}