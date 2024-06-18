import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ISelectIngredient } from '../../../interfaces/ISelectIngredient';
import { IUnit } from '../../../interfaces/IUnit';
import { AddRecipeDialogComponent } from '../add-recipe-dialog/add-recipe-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IngredientService } from '../../../services/ingredient.service';
import { RecipeService } from '../../../services/recipe.service';
import { UnitService } from '../../../services/unit.service';

@Component({
  selector: 'app-edit-recipe-dialog',
  templateUrl: './edit-recipe-dialog.component.html',
  styleUrl: './edit-recipe-dialog.component.scss'
})
export class EditRecipeDialogComponent {

  editRecipeForm = this.fb.group({
    recipeName: this.fb.control('', Validators.required),
    cookingTime: this.fb.control(''),
    servings: this.fb.control('', Validators.required),
    difficultyLevel: this.fb.control(''),
    mealType: this.fb.control(''),
    cuisineType: this.fb.control(''),
    dietaryInformation: this.fb.control(''),
    source: this.fb.control(''),
    imageUrl: this.fb.control(''),
    raiting: this.fb.control(''),
    favorite: this.fb.control(false),
    recipeIngredients: this.fb.array([]),
    instructions: this.fb.array([])
  });

  difficulties: any[] = [
    { value: 'Easy', viewValue: 'Easy' },
    { value: 'Medium', viewValue: 'Medium' },
    { value: 'Hard', viewValue: 'Hard' },
  ];

  mealTypes: any[] = [
    { value: 'Breakfast', viewValue: 'Breakfast' },
    { value: 'Lunch', viewValue: 'Lunch' },
    { value: 'Dinner', viewValue: 'Dinner' },
    { value: 'Snack', viewValue: 'Snack' },
    { value: 'Dessert', viewValue: 'Dessert' },
    { value: 'Appetizer', viewValue: 'Appetizer' },
    { value: 'Beverage', viewValue: 'Beverage' },
  ];

  cuisineTypes: any[] = [
    { value: 'Italian', viewValue: 'Italian' },
    { value: 'Mexican', viewValue: 'Mexican' },
    { value: 'Indian', viewValue: 'Indian' },
    { value: 'Chinese', viewValue: 'Chinese' },
    { value: 'Japanese', viewValue: 'Japanese' },
    { value: 'Thai', viewValue: 'Thai' },
    { value: 'Mediterranean', viewValue: 'Mediterranean' },
    { value: 'American', viewValue: 'American' },
    { value: 'French', viewValue: 'French' },
    { value: 'Spanish', viewValue: 'Spanish' },
  ];

  dietTypes: any[] = [
    { value: 'Vegetarian', viewValue: 'Vegetarian' },
    { value: 'Vegan', viewValue: 'Vegan' },
    { value: 'Keto', viewValue: 'Keto' },
    { value: 'Paleo', viewValue: 'Paleo' },
    { value: 'Gluten-free', viewValue: 'Gluten-free' },
    { value: 'Low-carb', viewValue: 'Low-carb' },
    { value: 'Mediterranean', viewValue: 'Mediterranean' },
    { value: 'Pescatarian', viewValue: 'Pescatarian' },
    { value: 'Whole30', viewValue: 'Whole30' },
    { value: 'Flexitarian', viewValue: 'Flexitarian' },
  ];

  showNewIngredientField: boolean[] = [];
  existingIngredients: ISelectIngredient[] = [];
  units: IUnit[] = [];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddRecipeDialogComponent>,
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private unitService: UnitService,
  ){}

  ngOnInit() {
    this.ingredientService.getAllIngredients()
    .subscribe((res) => {
      this.existingIngredients = res;
    });

    this.unitService.getAllUnits()
    .subscribe((res) => {
      this.units = res;
    });

    this.editRecipeForm.patchValue({
      recipeName: this.data.recipeName,
      cookingTime: this.data.cookingTime,
      servings: this.data.servings,
      difficultyLevel: this.data.difficultyLevel,
      mealType: this.data.mealType,
      cuisineType: this.data.cuisineType,
      dietaryInformation: this.data.dietaryInformation,
      source: this.data.source,
      imageUrl: this.data.imageUrl,
      raiting: this.data.rating,
      favorite: this.data.favorite,
    })
  }

  onSubmit() {
    this.recipeService.CreateRecipe(this.editRecipeForm.value).subscribe(res => {
      this.closeDialog();
    });

    console.log(this.editRecipeForm.value);
  }

  toggleNewIngredientField(index: number): void {
    this.showNewIngredientField[index] = !this.showNewIngredientField[index];
        
    // Reset the dropdown selection if switching to new ingredient input
    console.log(this.editRecipeForm.get(`ingredients.${index}.ingredientName`));
    this.editRecipeForm.get(`ingredients.${index}`)?.reset();
    console.log(this.editRecipeForm.get(`ingredients.${index}.ingredientName`));
}

  get recipeIngredientsForms() {
    return this.editRecipeForm.get('recipeIngredients') as FormArray
  }

  get instructionsForms() {
    return this.editRecipeForm.get('instructions') as FormArray
  }

  addIngredient() {
    const recipeIngredient = this.fb.group({
      ingredient: [Validators.required],
      unit: [Validators.required],
      quantity: [0,Validators.required]
    });
 
    console.log(recipeIngredient);
    this.recipeIngredientsForms.push(recipeIngredient);
  }

  deleteIngredient(i: number) {
    this.recipeIngredientsForms.removeAt(i);
  }

  addInstruction() {
    const instruction = this.fb.group({
      stepNumber: [],
      instructionText: [],
    });

    this.instructionsForms.push(instruction);
  }

  deleteInstruction(i: number) {
    this.instructionsForms.removeAt(i);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
