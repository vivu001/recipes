import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    recipes$: Observable<Recipe[]>;

    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
        this.recipes$ = this.recipesService.getAllRecipes$();
    }

}
