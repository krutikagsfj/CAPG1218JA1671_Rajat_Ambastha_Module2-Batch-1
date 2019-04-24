import { Component, OnInit } from '@angular/core';
import { MobileserviceService, Mobile } from '../mobileservice.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  
    service:MobileserviceService;
    removedMobile: Mobile[]=[];
    s:boolean=false;
    sortByAsc: boolean = true;
      constructor(service:MobileserviceService) {
        this.service=service;
        
       }
       mobile:Mobile[]=[]
       delete(mId:number)
       {
       this.mobile=this.service.delete(mId);
        this.mobile=this.service.getMobile();
        this.s=true;
       }
       column:string="mId"; 
       order:boolean=true;
       sort(column:string){
       
         if(this.column==column )
         {
           this.order=!this.order;
         }else{
           this.order=true;
           this.column=column;
         }
       }
     
      ngOnInit() {
        this.service.fetchMobile();
        this.mobile=this.service.getMobile();
      }


      sortingid(parm){
        this.mobile.sort((a, b)=> {return a.mobileId - b.mobileId});
      }
      sortingname(parm){
        if(this.sortByAsc == true) {
          this.sortByAsc = false;
          this.mobile.sort((a, b) => {
           return a[parm].localeCompare(b[parm]);
          });
        } else {
          this.sortByAsc = true;
          this.mobile.sort((a, b) => {
            return b[parm].localeCompare(a[parm]);
         });
       }
      }
      sortingprice(parm){
        if(this.sortByAsc == true) {
          this.sortByAsc = false;
          this.mobile.sort((a, b) => {
           return a[parm].localeCompare(b[parm]);
          });
        } else {
          this.sortByAsc = true;
          this.mobile.sort((a, b) => {
            return b[parm].localeCompare(a[parm]);
         });
       }
      }
    
    }