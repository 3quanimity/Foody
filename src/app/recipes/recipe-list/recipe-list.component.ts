import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>()
  recipes: RecipeModel[]= [
    new RecipeModel("Recipe 1", "this is recipe 1 description", "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg"),
    new RecipeModel("Recipe 2", "this is recipe 2 description", "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__340.jpg"),
    new RecipeModel("Recipe 3", "this is recipe 3 description", "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe)
  }

}
