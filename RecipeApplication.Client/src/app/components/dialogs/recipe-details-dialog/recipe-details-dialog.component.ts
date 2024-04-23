import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-details-dialog',
  templateUrl: './recipe-details-dialog.component.html',
  styleUrl: './recipe-details-dialog.component.scss'
})
export class RecipeDetailsDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

}
