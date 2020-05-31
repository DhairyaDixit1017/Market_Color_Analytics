import { Component, OnInit } from '@angular/core';
import { InterService } from '.././Services/inter.service';

@Component({
  selector: 'app-filter-sector',
  templateUrl: './filter-sector.component.html',
  styleUrls: ['./filter-sector.component.css']
})

export class FilterSectorComponent implements OnInit {
	sectorVals:string;
	c1="BASIC INDUSTRIES";
	c2="CAPITAL GOODS";
	c3="CONSUMER NON-DURABLES";
	c4="CONSUMER SERVICES";
	c5="ENERGY";
	c6="FINANCE";
	c7="HEALTH CARE";
	c8="MISCELLANEOUS";
	c9="PUBLIC UTILITIES";
	c10="TECHNOLOGY";
	c11="TRANSPORTATION";
	serverLists = [];
	taskInput='';
	check1=true;
	check2=true;
	check3=true;
	check4=true;
	check5=true;
	check6=true;
	check7=true;
	check8=true;
	check9=true;
	check10=true;
	check11=true;
  constructor( private connect:InterService ) {

	  }

  ngOnInit(): void {
	  this.connect.cast.subscribe(sectorVals=> this.sectorVals=sectorVals);
  }

  prefixMatch(textValue,filter){
			for(var i=0;i<filter.length;i++){
				if(i>textValue.length || textValue[i]!==filter[i])
					return false;
			}
			return true;
		}

		filterList(){

			var input,filter,li,ul,a,i,txtValue;
			input = document.getElementsByClassName("searchIn")[0];
			ul = document.getElementsByClassName("listOfSectors")[0];
			filter = input.value.toUpperCase();
			li = ul.getElementsByTagName("li");

			for(i=0;i<li.length;i++){
				txtValue = li[i].innerText;
				if(this.prefixMatch(txtValue.toUpperCase(),filter))
					li[i].style.display="";
				else	
					li[i].style.display="none";	
			}
		}

		addServers1(event:any){
			if(this.check1===true)
			{
			this.connect.editInterim(this.c1);
			this.taskInput = this.c1;
			this.clickServer();
			}
			this.check1=false;
		}

		addServers2(event:any){
			if(this.check2===true)
			{
			this.connect.editInterim(this.c2);
			this.taskInput = this.c2;
			this.clickServer();
			}
			this.check2=false;
		}

		addServers3(event:any){
			if(this.check3===true)
			{
			this.connect.editInterim(this.c3);
			this.taskInput = this.c3;
			this.clickServer();
			}
			this.check3=false;
		}

		addServers4(event:any){
			if(this.check4===true)
			{
			this.connect.editInterim(this.c4);
			this.taskInput = this.c4;
			this.clickServer();
			}
			this.check4=false;
		}

		addServers5(event:any){
			if(this.check5===true)
			{
			this.connect.editInterim(this.c5);
			this.taskInput = this.c5;
			this.clickServer();
			}
			this.check5=false;
		}

		addServers6(event:any){
			if(this.check6===true)
			{
			this.connect.editInterim(this.c6);
			this.taskInput = this.c6;
			this.clickServer();
			}
			this.check6=false;
		}

		addServers7(event:any){
			if(this.check7===true)
			{
			this.connect.editInterim(this.c7);
			this.taskInput = this.c7;
			this.clickServer();
			}
			this.check7=false;
		}

		addServers8(event:any){
			if(this.check8===true)
			{
			this.connect.editInterim(this.c8);
			this.taskInput = this.c8;
			this.clickServer();
			}
			this.check8=false;
		}

		addServers9(event:any){
			if(this.check9===true)
			{
			this.connect.editInterim(this.c9);
			this.taskInput = this.c9;
			this.clickServer();
			}
			this.check9=false;
		}

		addServers10(event:any){
			if(this.check10===true)
			{
			this.connect.editInterim(this.c10);
			this.taskInput = this.c10;
			this.clickServer();
			}
			this.check10=false;
		}

		addServers11(event:any){
			if(this.check11===true)
			{
			this.connect.editInterim(this.c11);
			this.taskInput = this.c11;
			this.clickServer();
			}
			this.check11=false;
		}

		clickServer(){
			this.serverLists.push(this.taskInput);
		}
		
}

