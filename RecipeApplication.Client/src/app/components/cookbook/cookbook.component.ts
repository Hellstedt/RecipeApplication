import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interfaces/IRecipe';
import { RecipeService } from '../../services/recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRecipeDialogComponent } from '../dialogs/add-recipe-dialog/add-recipe-dialog.component';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.scss'
})

export class CookbookComponent implements OnInit {

  recipeCardDataList: IRecipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private dialog: MatDialog,
  ){}

  ngOnInit() {
    this.recipeService.getAllRecipes()
    .subscribe((res) => {
      this.recipeCardDataList = res;
    });
  }

  addRecipeDialog() {
    this.dialog.open(AddRecipeDialogComponent, {
      width: '40%',
    })
  }
}
