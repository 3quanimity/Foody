import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[]= [
    new RecipeModel("Test Recipe", "This is just a test", "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg"),
    new RecipeModel("Test Recipe", "This is just a test", "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg"),
    new RecipeModel("Test Recipe", "This is just a test", "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
