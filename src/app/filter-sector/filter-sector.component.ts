import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-sector',
  templateUrl: './filter-sector.component.html',
  styleUrls: ['./filter-sector.component.css']
})
export class FilterSectorComponent implements OnInit {

  constructor() {
	  }

  ngOnInit(): void {
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
}
