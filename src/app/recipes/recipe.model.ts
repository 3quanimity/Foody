// NOTE: ⛔ OLD LENGTHY WAY
// export class RecipeModel { 
//   public name: string;
//   public description: string; 
//   public imagePath: string;

//   constructor(name: string, desc: string, imagePath: string) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//   }
// }
// NOTE: 💡 TYPESCRIPT SHORTCUT
export class RecipeModel {
  constructor(public name: string, public desc: string, public imagePath: string) {}
}

