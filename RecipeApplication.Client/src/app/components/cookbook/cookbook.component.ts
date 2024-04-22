import { Component } from '@angular/core';
import { IRecipe } from '../../interfaces/IRecipe';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.scss'
})

export class CookbookComponent {

  recipeCardDataList: IRecipe[] = [
    {
      id: 0,
      name: 'Carbonara',
      cookingTime: 30,
      image: 'https://shared.cdn.smp.schibsted.com/v2/images/e7b3bce3-f80f-435f-86c5-15520404e752?fit=crop&h=1267&w=1900&s=30663fffcdabe34635de9739538b21aae3837073'
    },
    {
      id: 1,
      name: 'Sushi',
      cookingTime: 60,
      image: 'https://cdn.starwebserver.se/shops/thailaan/files/cache/sushi-mix_grande.jpg?_=1689616197'
    },
    {
      id: 2,
      name: 'Chicken Alfredo Pasta',
      cookingTime: 45,
      image: 'https://simply-delicious-food.com/wp-content/uploads/2022/01/Image-2022-05-23-at-08.21.jpg'
    },
    {
      id: 3,
      name: 'Vegetable Stir Fry',
      cookingTime: 25,
      image: 'https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg'
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      cookingTime: 20,
      image: 'https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*'
    },
    {
      id: 5,
      name: 'Mushroom Risotto',
      cookingTime: 40,
      image: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2019/11/vegan-mushroom-risotto-close-1000x1500.jpg'
    },
    {
      id: 6,
      name: 'Beef Tacos',
      cookingTime: 35,
      image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2022/12/Beef-Tacos-55.jpg'
    },
    {
      id: 7,
      name: 'Caprese Salad',
      cookingTime: 10,
      image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg'
    },
    {
      id: 8,
      name: 'Shrimp Scampi',
      cookingTime: 25,
      image: 'https://www.allrecipes.com/thmb/jiV_4f8vXFle1RdFLgd8-_31J3M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg'
    },
    {
      id: 9,
      name: 'Chicken Parmesan',
      cookingTime: 40,
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-202102-airfryerchickenparm-184-ls-1612561654.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*'
    },
    {
      id: 10,
      name: 'Vegetarian Chili',
      cookingTime: 60,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFBo1UGIT35IrqdwnMM0km4Poxj31PojCAiGEIoojCw&s'
    }
  ]

}
