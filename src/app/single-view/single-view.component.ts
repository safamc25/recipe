import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit{
  id:any=""
  singleRecipe:any={}
 
 constructor(private service:DataService,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
     this.id=data.id
    //  console.log(this.id);

    this.service.getRecipes().subscribe((response:any)=>{
      console.log(response.recipes);
      
      this.singleRecipe=response.recipes.find((i:any)=>i.id==this.id)
      console.log(this.singleRecipe);
      
    })
     
    })
   
  }

}
