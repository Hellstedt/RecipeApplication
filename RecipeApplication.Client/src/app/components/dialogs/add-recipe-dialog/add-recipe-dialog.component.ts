import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrl: './add-recipe-dialog.component.scss'
})
export class AddRecipeDialogComponent {

  addRecipeForm = this.fb.group({
    name: this.fb.control('', Validators.required),
    cookingTime: this.fb.control(''),
    servings: this.fb.control('', Validators.required),
    difficultyLevel: this.fb.control(''),
    mealType: this.fb.control(''),
    cuisineType: this.fb.control(''),
    dietaryInformation: this.fb.control(''),
    source: this.fb.control(''),
    raiting: this.fb.control(''),
    favorite: this.fb.control(false),
  });

  difficulties: any[] = [
    {value: '1', viewValue: 'Easy'},
    {value: '2', viewValue: 'Medium'},
    {value: '3', viewValue: 'Hard'},
  ];

  mealTypes: any[] = [
    {value: '1', viewValue: 'Breakfast'},
    {value: '2', viewValue: 'Lunch'},
    {value: '3', viewValue: 'Dinner'},
    {value: '4', viewValue: 'Snack'},
    {value: '5', viewValue: 'Dessert'},
    {value: '6', viewValue: 'Appetizer'},
    {value: '7', viewValue: 'Beverage'},
  ];

  cuisineTypes: any[] = [
    { value: '1', viewValue: 'Italian' },
    { value: '2', viewValue: 'Mexican' },
    { value: '3', viewValue: 'Indian' },
    { value: '4', viewValue: 'Chinese' },
    { value: '5', viewValue: 'Japanese' },
    { value: '6', viewValue: 'Thai' },
    { value: '7', viewValue: 'Mediterranean' },
    { value: '8', viewValue: 'American' },
    { value: '9', viewValue: 'French' },
    { value: '10', viewValue: 'Spanish' },
];

dietTypes: any[] = [
  { value: '1', viewValue: 'Vegetarian' },
  { value: '2', viewValue: 'Vegan' },
  { value: '3', viewValue: 'Keto' },
  { value: '4', viewValue: 'Paleo' },
  { value: '5', viewValue: 'Gluten-free' },
  { value: '6', viewValue: 'Low-carb' },
  { value: '7', viewValue: 'Mediterranean' },
  { value: '8', viewValue: 'Pescatarian' },
  { value: '9', viewValue: 'Whole30' },
  { value: '10', viewValue: 'Flexitarian' },
];

  constructor(
    private dialogRef: MatDialogRef<AddRecipeDialogComponent>,
    private fb: FormBuilder,
  ){}

  onSubmit() {
    
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
