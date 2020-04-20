import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';
import {AlertController} from "@ionic/angular";


@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
    loadedRecipe: Recipe;

    constructor(private activatedRoute: ActivatedRoute,
                private recipesService: RecipesService,
                private router: Router,
                private alertController: AlertController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paraMap => {
            if (!paraMap.has('recipeId')) {
                // TODO:
                return;
            }
            const recipeId = paraMap.get('recipeId');
            this.loadedRecipe = this.recipesService.getRecipe(recipeId);
        });
    }

    async onDeleteRecipe() {
        const alert = await this.alertController.create({
            header: 'Are you sure?',
            message: 'Do you wanna delete this recipe right now?',
            buttons: [{
                text: 'Cancel',
                role: 'cancel'
            },
                {
                    text: 'Delete',
                    handler: () => {
                        console.log('Cancel clicked!');
                        this.recipesService.deleteRecipe(this.loadedRecipe.id);
                        this.router.navigate(['/recipes']);
                    }
                }
            ]
        });

        await alert.present();

    }
}
