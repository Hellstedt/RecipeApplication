import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interfaces/IRecipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.scss'
})

export class CookbookComponent implements OnInit {

  recipeCardDataList: IRecipe[] = [];

  constructor(
    private recipeService: RecipeService,
  ){}

  ngOnInit() {
    this.recipeService.getAllRecipes()
    .subscribe((res) => {
      this.recipeCardDataList = res;
    });
  }
}
