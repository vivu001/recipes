import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private _recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Ultimate Chocolate Chip Cookies',
            imgUrl: 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',
            ingredients: ['zucker', 'backpulver', 'vanilla', 'weizenmehl', 'schokoladen']
        },
        {
            id: 'r2',
            title: 'Lasagna',
            imgUrl: 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg',
            ingredients: ['lean ground beef', 'minced onion', 'garlic, crushed', 'tomato paste', ' sweet Italian sausage']
        },
        {
            id: 'r3',
            title: 'Jamaican Pigeon Peas and Rice',
            imgUrl: 'https://d3eh3svpl1busq.cloudfront.net/kAYhDANARZBYBuChUfNCjMuCDSNidQew/assets/static/optimized/wp-content/uploads/2016/05/9bfc3d636aaaa728bb02417e4f3c1f8c.IMG_5134.jpg',
            ingredients: ['garlic', ' basmati rice', 'smoked paprika', 'coconut milk', 'pigeon pea']
        }
    ];

    recipesSubject = new BehaviorSubject<Recipe[]>(this._recipes);

    constructor() {
    }

    get getAllRecipes(): Recipe[] {
        return [...this._recipes];
    }

    getRecipe(recipeID: string) {
        return {...this._recipes.find(recipe => recipe.id === recipeID)};
    }

    deleteRecipe(recipeId: string) {
        this._recipes = this._recipes.filter(recipe => recipe.id !== recipeId);
        console.table(this._recipes);

        this.recipesSubject.next(this._recipes);
    }

    getAllRecipes$(): Observable<Recipe[]> {
        return this.recipesSubject.asObservable();
    }
}
