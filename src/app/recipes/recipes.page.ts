import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';
import {Observable, of} from 'rxjs';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    _recipes: Recipe[];
    recipes$: Observable<Recipe[]>;

    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
        // this._recipes = this.recipesService.getAllRecipes;
        this.recipes$ = this.recipesService.getAllRecipes$();
    }

    get recipes(): Recipe[] {
        return this._recipes;
    }
}
