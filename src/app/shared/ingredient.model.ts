// NOTE: ⛔ OLD LENGTHY WAY
// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// NOTE: 💡 TYPESCRIPT SHORTCUT
export class IngredientModel {
   constructor(public name: string, public amount: number) { }
}