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
    })
  }





  // recipeCardDataList: IRecipe[] = [
  //   {
  //     id: 0,
  //     name: 'Carbonara',
  //     cookingTime: 30,
  //     image: 'https://shared.cdn.smp.schibsted.com/v2/images/e7b3bce3-f80f-435f-86c5-15520404e752?fit=crop&h=1267&w=1900&s=30663fffcdabe34635de9739538b21aae3837073'
  //   }
  // ]



}
