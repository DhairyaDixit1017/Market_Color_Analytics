import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

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
			input = document.getElementsByClassName("searchInput")[0];
			ul = document.getElementsByClassName("listOfNations")[0];
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
