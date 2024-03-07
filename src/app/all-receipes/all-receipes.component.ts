import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-all-receipes',
  templateUrl: './all-receipes.component.html',
  styleUrls: ['./all-receipes.component.css']
})
export class AllReceipesComponent {
  // data:string="hi welcome to the restuarant"
  placeholderData:string="Search for Recipe and Cuisine"
  recipeName:string=""
  cuisine:string=""
  recipeList: any[] = [];
  p: number = 1;
  filterData: any = ""

  constructor(private ds:DataService){}

  ngOnInit(): void {
  //  methods are defined here
  this.ds.getRecipes().subscribe((data:any)=>{
   this.recipeList=data.recipes
   console.log(this.recipeList);
   
    
  })
  
  }
  changeFilterData(data: any) {
    this.filterData = data
  }
}

