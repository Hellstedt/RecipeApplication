import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interfaces/IRecipe';
import { RecipeService } from '../../services/recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRecipeDialogComponent } from '../dialogs/add-recipe-dialog/add-recipe-dialog.component';
import { Router } from '@angular/router';

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
    private router: Router,
  ){}

  ngOnInit() {
    this.recipeService.getAllRecipes()
    .subscribe((res) => {
      this.recipeCardDataList = res;
    });
  }

  addRecipeDialog() {
    var dialogRef = this.dialog.open(AddRecipeDialogComponent, {
      width: '40%',
    });
    dialogRef.afterClosed().subscribe(res => {
      this.updateRecipeList();
      console.log("The recipe was created successfully.");
    })
  }

  updateRecipeList() {
    this.recipeService.getAllRecipes()
    .subscribe((res) => {
      this.recipeCardDataList = res;
    });
  }
}
