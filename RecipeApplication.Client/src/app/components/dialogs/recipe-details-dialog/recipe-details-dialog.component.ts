import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RecipeService } from '../../../services/recipe.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-recipe-details-dialog',
  templateUrl: './recipe-details-dialog.component.html',
  styleUrl: './recipe-details-dialog.component.scss'
})
export class RecipeDetailsDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private recipeService: RecipeService,
    private dialogRef: MatDialogRef<RecipeDetailsDialogComponent>,
    private dialog: MatDialog,
  ) { }


  deleteRecipe(): void {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent);

    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(this.data);
        this.recipeService.deleteRecipe(this.data.id)
        .subscribe(() => {
          console.log(`Recipe with ID ${this.data.id} deleted successfully`);
          this.dialogRef.close();
        });
      }
    });
  }
}
