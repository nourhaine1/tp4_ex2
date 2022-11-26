import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {
  tabPersonnages = [
    {nom:'laugh', Image:'assets/emoji1.jpg', nb: 44, majeur:true},
    {nom:'lovely', Image:'assets/emoji2.jpg', nb: 16, majeur:true},
    {nom:'blink', Image:'assets/emoj3.jpg', nb: 12, majeur:false}];
    sumMajuer:number=0;
   
  constructor() { 
   
  }
     
  ngOnInit(): void {
  }
  
  addOne(index : number){
     this.tabPersonnages[index].nb++;
     console.log (this.tabPersonnages[index].nb);
  }
  majeurOuNon(index:number){
    if (this.tabPersonnages[index].majeur==true){
     
       console.log("chckkkked ya madame");
          
    }
    
  /*if (this.isChecked==true){
    this.sumMajuer++;
    console.log("issss chekkeedddd ya madame ")
  }
  
   */
}
  majeurSum ():number{
    let sum=0;
    for (let i=0;i<this.tabPersonnages.length;i++){
      //console.log(i);
      if (this.tabPersonnages[i].majeur==true){
        sum++;
       // console.log(i);
  }
 
    }
    console.log(this.sumMajuer);
    return sum;

}
}
