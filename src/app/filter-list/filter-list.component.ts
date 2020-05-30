import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
	listVals="";

	l1="ABBOTT LABORATORIES";
	l2="ABBVIE INC";
	l3="ACCENTURE PLC";
	l4="ALIBABA GROUP HOLDING LTD";
	l5="ALTRIA GROUP INC";
	l6="AMERICAN EXPRESS CO";
	l7="AMERICAN TOWER CORP";
	l8="ANHEUSER-BUSCH INBEV SA/NV";
	l9="ANTHEM INC";
	l10="ASTRAZENECA PLC";
	l11="AT&T INC";
	l12="BANCO SANTANDER BRASIL SA";
	l13="BANCO SANTANDER CHILE";
	l14="BANCO SANTANDER MEXICO SA INSTITUCION DE BANCA MULTIPLE GRUPO FINANCIERO SANTAND";
	l15="BANCO SANTANDER RIO SA";
	l16="BANCO SANTANDER SA";
	l17="BANK OF AMERICA CORP";
	l18="BANK OF NOVA SCOTIA/THE";
	l19="BECTON DICKINSON AND CO";
	l20="BERKSHIRE HATHAWAY INC";
	l21="BLACKROCK INC";
	l22="BRISTOL-MYERS SQUIBB CO";
	l23="BRITISH AMERICAN TOBACCO MALAYSIA BHD";
	l24="BRITISH AMERICAN TOBACCO PLC";
	l25="CANADIAN NATIONAL RAILWAY CO";
	l26="CATERPILLAR INC";
	l27="CHINA LIFE INSURANCE CO LTD";
	l28="CHINA PETROLEUM  CHEMICAL CORP";
	l29="CITIGROUP INC";
	l30="CVS HEALTH CORP";
	l31="DIAGEO PLC";
	l32="DOMINION ENERGY INC";
	l33="DUKE ENERGY CORP";
	l34="ELI LILLY AND CO";
	l35="ENBRIDGE INC";
	l36="EQUINOR ASA";
	l37="ESTEE LAUDER COS INCTHE";
	l38="EXXON MOBIL CORP";
	l39="FIDELITY NATIONAL INFORMATION SERVICES INC";
	l40="GENERAL ELECTRIC CO";
	l41="GLAXOSMITHKLINE PLC";
	l42="GOLDMAN SACHS GROUP INC/THE";
	l43="HOME DEPOT INCTHE";
	l44="HONEYWELL INTERNATIONAL INC";
	l45="HSBC HOLDINGS PLC";
	l46="JOHNSON & JOHNSON";
	l47="JPMORGAN CHASE  CO";
	l48="LOCKHEED MARTIN CORP";
	l49="LOWELL COPPER LTD";
	l50="MASTERCARD INC";
	l51="MEDTRONIC PLC";
	l52="MITSUBISHI UFJ FINANCIAL GROUP INC";
	l53="MORGAN STANLEY";
	l54="NEXTERA ENERGY INC";
	l55="NIKE INC";
	l56="NOVARTIS AG";
	l57="NOVO NORDISK A/S";
	l58="PETROLEO BRASILEIRO SA";
	l59="PFIZER INC";
	l60="PHILIP MORRIS INTERNATIONAL INC";
	l61="PNC FINANCIAL SERVICES GROUP INC/THE";
	l62="RIO TINTO PLC";
	l63="ROYAL BANK OF CANADA";
	l64="ROYAL DUTCH SHELL PLC";
	l65="SALESFORCE.COM INC";
	l66="SAP SE";
	l67="TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD";
	l68="THERMO FISHER SCIENTIFIC INC";
	l69="TOYOTA MOTOR CORP";
	l70="UNILEVER NV";
	l71="UNION PACIFIC CORP";
	l72="UNITED PARCEL SERVICE INC";
	l73="UNITED TECHNOLOGIES CORP";
	l74="UNITEDHEALTH GROUP INC";
	l75="UNITEDHEALTH GROUP INC";
	l76="VERIZON COMMUNICATIONS INC";
	l77="VISA INC";
	l78="VMWARE INC";
	l79="WALMART INC";
	l80="WELLS FARGO & CO";
	
	compLists = [];
	compInput='';

	lcheck1=true;
	lcheck2=true;
	lcheck3=true;
	lcheck4=true;
	lcheck5=true;
	lcheck6=true;
	lcheck7=true;
	lcheck8=true;
	lcheck9=true;
	lcheck10=true;
	lcheck11=true;
	lcheck12=true;
	lcheck13=true;
	lcheck14=true;
	lcheck15=true;
	lcheck16=true;
	lcheck17=true;
	lcheck18=true;
	lcheck19=true;
	lcheck20=true;
	lcheck21=true;
	lcheck22=true;
	lcheck23=true;
	lcheck24=true;
	lcheck25=true;
	lcheck26=true;
	lcheck27=true;
	lcheck28=true;
	lcheck29=true;
	lcheck30=true;
	lcheck31=true;
	lcheck32=true;
	lcheck33=true;
	lcheck34=true;
	lcheck35=true;
	lcheck36=true;
	lcheck37=true;
	lcheck38=true;
	lcheck39=true;
	lcheck40=true;
	lcheck41=true;
	lcheck42=true;
	lcheck43=true;
	lcheck44=true;
	lcheck45=true;
	lcheck46=true;
	lcheck47=true;
	lcheck48=true;
	lcheck49=true;
	lcheck50=true;
	lcheck51=true;
	lcheck52=true;
	lcheck53=true;
	lcheck54=true;
	lcheck55=true;
	lcheck56=true;
	lcheck57=true;
	lcheck58=true;
	lcheck59=true;
	lcheck60=true;
	lcheck61=true;
	lcheck62=true;
	lcheck63=true;
	lcheck64=true;
	lcheck65=true;
	lcheck66=true;
	lcheck67=true;
	lcheck68=true;
	lcheck69=true;
	lcheck70=true;
	lcheck71=true;
	lcheck72=true;
	lcheck73=true;
	lcheck74=true;
	lcheck75=true;
	lcheck76=true;
	lcheck77=true;
	lcheck78=true;
	lcheck79=true;
	lcheck80=true;
	

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

		addComp1(event:any){
			if(this.lcheck1===true)
			{
			this.listVals=this.l1;
			this.compInput = this.l1;
			this.clickComp();
			}
			this.lcheck1=false;
		}

		addComp2(event:any){
			if(this.lcheck2===true)
			{
			this.listVals=this.l2;
			this.compInput = this.l2;
			this.clickComp();
			}
			this.lcheck2=false;
		}

		addComp3(event:any){
			if(this.lcheck3===true){
			this.listVals=this.l3;
			this.compInput = this.l3;
			this.clickComp();
			}
			this.lcheck3=false;
		}

		addComp4(event:any){
			if(this.lcheck4===true){
			this.listVals=this.l4;
			this.compInput = this.l4;
			this.clickComp();
			}
			this.lcheck4=false;
		}

		addComp5(event:any){
			if(this.lcheck5===true){
			this.listVals=this.l5;
			this.compInput = this.l5;
			this.clickComp();
			}
			this.lcheck5=false;
		}

		addComp6(event:any){
			if(this.lcheck6===true){
			this.listVals=this.l6;
			this.compInput = this.l6;
			this.clickComp();
			}
			this.lcheck6=false;
		}

		addComp7(event:any){
			if(this.lcheck7===true){
			this.listVals=this.l7;
			this.compInput = this.l7;
			this.clickComp();
			}
			this.lcheck7=false;
		}

		addComp8(event:any){
			if(this.lcheck8===true){
			this.listVals=this.l8;
			this.compInput = this.l8;
			this.clickComp();
			}
			this.lcheck8=false;
		}

		addComp9(event:any){
			if(this.lcheck9===true){
			this.listVals=this.l9;
			this.compInput = this.l9;
			this.clickComp();
			}
			this.lcheck9=false;
		}

		addComp10(event:any){
			if(this.lcheck10===true){
			this.listVals=this.l10;
			this.compInput = this.l10;
			this.clickComp();
			}
			this.lcheck10=false;
		}

		addComp11(event:any){
			if(this.lcheck11===true){
			this.listVals=this.l11;
			this.compInput = this.l11;
			this.clickComp();
			}
			this.lcheck11=false;
		}

		addComp12(event:any){
			if(this.lcheck12===true){
			this.listVals=this.l12;
			this.compInput = this.l12;
			this.clickComp();
			}
			this.lcheck12=false;
		}

		addComp13(event:any){
			if(this.lcheck13===true){
			this.listVals=this.l13;
			this.compInput = this.l13;
			this.clickComp();
			}
			this.lcheck13=false;
		}

		addComp14(event:any){
			if(this.lcheck14===true){
			this.listVals=this.l14;
			this.compInput = this.l14;
			this.clickComp();
			}
			this.lcheck14=false;
		}

		addComp15(event:any){
			if(this.lcheck15===true){
			this.listVals=this.l15;
			this.compInput = this.l15;
			this.clickComp();
			}
			this.lcheck15=false;
		}

		addComp16(event:any){
			if(this.lcheck16===true){
			this.listVals=this.l16;
			this.compInput = this.l16;
			this.clickComp();
			}
			this.lcheck16=false;
		}

		addComp17(event:any){
			if(this.lcheck17===true){
			this.listVals=this.l17;
			this.compInput = this.l17;
			this.clickComp();
			}
			this.lcheck17=false;
		}

		addComp18(event:any){
			if(this.lcheck18===true){
			this.listVals=this.l18;
			this.compInput = this.l18;
			this.clickComp();
			}
			this.lcheck18=false;
		}

		addComp19(event:any){
			if(this.lcheck19===true){
			this.listVals=this.l19;
			this.compInput = this.l19;
			this.clickComp();
			}
			this.lcheck19=false;
		}

		addComp20(event:any){
			if(this.lcheck20===true){
			this.listVals=this.l20;
			this.compInput = this.l20;
			this.clickComp();
			}
			this.lcheck20=false;
		}

		addComp21(event:any){
			if(this.lcheck21===true){
			this.listVals=this.l21;
			this.compInput = this.l21;
			this.clickComp();
			}
			this.lcheck21=false;
		}

		addComp22(event:any){
			if(this.lcheck22===true){
			this.listVals=this.l22;
			this.compInput = this.l22;
			this.clickComp();
			}
			this.lcheck22=false;
		}

		addComp23(event:any){
			if(this.lcheck23===true){
			this.listVals=this.l23;
			this.compInput = this.l23;
			this.clickComp();
			}
			this.lcheck23=false;
		}

		addComp24(event:any){
			if(this.lcheck24===true){
			this.listVals=this.l24;
			this.compInput = this.l24;
			this.clickComp();
			}
			this.lcheck24=false;
		}

		addComp25(event:any){
			if(this.lcheck25===true){
			this.listVals=this.l25;
			this.compInput = this.l25;
			this.clickComp();
			}
			this.lcheck25=false;
		}

		addComp26(event:any){
			if(this.lcheck26===true){
			this.listVals=this.l26;
			this.compInput = this.l26;
			this.clickComp();
			}
			this.lcheck26=false;
		}

		addComp27(event:any){
			if(this.lcheck27===true){
			this.listVals=this.l27;
			this.compInput = this.l27;
			this.clickComp();
			}
			this.lcheck27=false;
		}

		addComp28(event:any){
			if(this.lcheck28===true){
			this.listVals=this.l28;
			this.compInput = this.l28;
			this.clickComp();
			}
			this.lcheck28=false;
		}

		addComp29(event:any){
			if(this.lcheck29===true){
			this.listVals=this.l29;
			this.compInput = this.l29;
			this.clickComp();
			}
			this.lcheck29=false;
		}

		addComp30(event:any){
			if(this.lcheck30===true){
			this.listVals=this.l30;
			this.compInput = this.l30;
			this.clickComp();
			}
			this.lcheck30=false;
		}

		addComp31(event:any){
			if(this.lcheck31===true){
			this.listVals=this.l31;
			this.compInput = this.l31;
			this.clickComp();
			}
			this.lcheck31=false;
		}

		addComp32(event:any){
			if(this.lcheck32===true){
			this.listVals=this.l32;
			this.compInput = this.l32;
			this.clickComp();
			}
			this.lcheck32=false;
		}

		addComp33(event:any){
			if(this.lcheck33===true){
			this.listVals=this.l33;
			this.compInput = this.l33;
			this.clickComp();
			}
			this.lcheck33=false;
		}

		addComp34(event:any){
			if(this.lcheck34===true){
			this.listVals=this.l34;
			this.compInput = this.l34;
			this.clickComp();
			}
			this.lcheck34=false;
		}

		addComp35(event:any){
			if(this.lcheck35===true){
			this.listVals=this.l35;
			this.compInput = this.l35;
			this.clickComp();
			}
			this.lcheck35=false;
		}

		addComp36(event:any){
			if(this.lcheck36===true){
			this.listVals=this.l36;
			this.compInput = this.l36;
			this.clickComp();
			}
			this.lcheck36=false;
		}

		addComp37(event:any){
			if(this.lcheck37===true){
			this.listVals=this.l37;
			this.compInput = this.l37;
			this.clickComp();
			}
			this.lcheck37=false;
		}

		addComp38(event:any){
			if(this.lcheck38===true){
			this.listVals=this.l38;
			this.compInput = this.l38;
			this.clickComp();
			}
			this.lcheck38=false;
		}

		addComp39(event:any){
			if(this.lcheck39===true){
			this.listVals=this.l39;
			this.compInput = this.l39;
			this.clickComp();
			}
			this.lcheck39=false;
		}

		addComp40(event:any){
			if(this.lcheck40===true){
			this.listVals=this.l40;
			this.compInput = this.l40;
			this.clickComp();
			}
			this.lcheck40=false;
		}

		addComp41(event:any){
			if(this.lcheck41===true){
			this.listVals=this.l41;
			this.compInput = this.l41;
			this.clickComp();
			}
			this.lcheck41=false;
		}

		addComp42(event:any){
			if(this.lcheck42===true){
			this.listVals=this.l42;
			this.compInput = this.l42;
			this.clickComp();
			}
			this.lcheck42=false;
		}

		addComp43(event:any){
			if(this.lcheck43===true){
			this.listVals=this.l43;
			this.compInput = this.l43;
			this.clickComp();
			}
			this.lcheck43=false;
		}

		addComp44(event:any){
			if(this.lcheck44===true){
			this.listVals=this.l44;
			this.compInput = this.l44;
			this.clickComp();
			}
			this.lcheck44=false;
		}

		addComp45(event:any){
			if(this.lcheck45===true){
			this.listVals=this.l45;
			this.compInput = this.l45;
			this.clickComp();
			}
			this.lcheck45=false;
		}

		addComp46(event:any){
			if(this.lcheck46===true){
			this.listVals=this.l46;
			this.compInput = this.l46;
			this.clickComp();
			}
			this.lcheck46=false;
		}

		addComp47(event:any){
			if(this.lcheck47===true){
			this.listVals=this.l47;
			this.compInput = this.l47;
			this.clickComp();
			}
			this.lcheck47=false;
		}

		addComp48(event:any){
			if(this.lcheck48===true){
			this.listVals=this.l48;
			this.compInput = this.l48;
			this.clickComp();
			}
			this.lcheck48=false;
		}

		addComp49(event:any){
			if(this.lcheck49===true){
			this.listVals=this.l49;
			this.compInput = this.l49;
			this.clickComp();
			}
			this.lcheck49=false;
		}

		addComp50(event:any){
			if(this.lcheck50===true){
			this.listVals=this.l50;
			this.compInput = this.l50;
			this.clickComp();
			}
			this.lcheck50=false;
		}

		addComp51(event:any){
			if(this.lcheck51===true){
			this.listVals=this.l51;
			this.compInput = this.l51;
			this.clickComp();
			}
			this.lcheck51=false;
		}

		addComp52(event:any){
			if(this.lcheck52===true){
			this.listVals=this.l52;
			this.compInput = this.l52;
			this.clickComp();
			}
			this.lcheck52=false;
		}

		addComp53(event:any){
			if(this.lcheck53===true){
			this.listVals=this.l53;
			this.compInput = this.l53;
			this.clickComp();
			}
			this.lcheck53=false;
		}

		addComp54(event:any){
			if(this.lcheck54===true){
			this.listVals=this.l54;
			this.compInput = this.l54;
			this.clickComp();
			}
			this.lcheck54=false;
		}

		addComp55(event:any){
			if(this.lcheck55===true){
			this.listVals=this.l55;
			this.compInput = this.l55;
			this.clickComp();
			}
			this.lcheck55=false;
		}

		addComp56(event:any){
			if(this.lcheck56===true){
			this.listVals=this.l56;
			this.compInput = this.l56;
			this.clickComp();
			}
			this.lcheck56=false;
		}

		addComp57(event:any){
			if(this.lcheck57===true){
			this.listVals=this.l57;
			this.compInput = this.l57;
			this.clickComp();
			}
			this.lcheck57=false;
		}

		addComp58(event:any){
			if(this.lcheck58===true){
			this.listVals=this.l58;
			this.compInput = this.l58;
			this.clickComp();
			}
			this.lcheck58=false;
		}

		addComp59(event:any){
			if(this.lcheck59===true){
			this.listVals=this.l59;
			this.compInput = this.l59;
			this.clickComp();
			}
			this.lcheck59=false;
		}

		addComp60(event:any){
			if(this.lcheck60===true){
			this.listVals=this.l60;
			this.compInput = this.l60;
			this.clickComp();
			}
			this.lcheck60=false;
		}

		addComp61(event:any){
			if(this.lcheck61===true){
			this.listVals=this.l61;
			this.compInput = this.l61;
			this.clickComp();
			}
			this.lcheck61=false;
		}

		addComp62(event:any){
			if(this.lcheck62===true){
			this.listVals=this.l62;
			this.compInput = this.l62;
			this.clickComp();
			}
			this.lcheck62=false;
		}

		addComp63(event:any){
			if(this.lcheck63===true){
			this.listVals=this.l63;
			this.compInput = this.l63;
			this.clickComp();
			}
			this.lcheck63=false;
		}

		addComp64(event:any){
			if(this.lcheck64===true){
			this.listVals=this.l64;
			this.compInput = this.l64;
			this.clickComp();
			}
			this.lcheck64=false;
		}

		addComp65(event:any){
			if(this.lcheck65===true){
			this.listVals=this.l65;
			this.compInput = this.l65;
			this.clickComp();
			}
			this.lcheck65=false;
		}

		addComp66(event:any){
			if(this.lcheck66===true){
			this.listVals=this.l66;
			this.compInput = this.l66;
			this.clickComp();
			}
			this.lcheck66=false;
		}

		addComp67(event:any){
			if(this.lcheck67===true){
			this.listVals=this.l67;
			this.compInput = this.l67;
			this.clickComp();
			}
			this.lcheck67=false;
		}

		addComp68(event:any){
			if(this.lcheck68===true){
			this.listVals=this.l68;
			this.compInput = this.l68;
			this.clickComp();
			}
			this.lcheck68=false;
		}

		addComp69(event:any){
			if(this.lcheck69===true){
			this.listVals=this.l69;
			this.compInput = this.l69;
			this.clickComp();
			}
			this.lcheck69=false;
		}

		addComp70(event:any){
			if(this.lcheck70===true){
			this.listVals=this.l70;
			this.compInput = this.l70;
			this.clickComp();
			}
			this.lcheck70=false;
		}

		addComp71(event:any){
			if(this.lcheck71===true){
			this.listVals=this.l71;
			this.compInput = this.l71;
			this.clickComp();
			}
			this.lcheck71=false;
		}

		addComp72(event:any){
			if(this.lcheck72===true){
			this.listVals=this.l72;
			this.compInput = this.l72;
			this.clickComp();
			}
			this.lcheck72=false;
		}

		addComp73(event:any){
			if(this.lcheck73===true){
			this.listVals=this.l73;
			this.compInput = this.l73;
			this.clickComp();
			}
			this.lcheck73=false;
		}

		addComp74(event:any){
			if(this.lcheck74===true){
			this.listVals=this.l74;
			this.compInput = this.l74;
			this.clickComp();
			}
			this.lcheck74=false;
		}

		addComp75(event:any){
			if(this.lcheck75===true){
			this.listVals=this.l75;
			this.compInput = this.l75;
			this.clickComp();
			}
			this.lcheck75=false;
		}

		addComp76(event:any){
			if(this.lcheck76===true){
			this.listVals=this.l76;
			this.compInput = this.l76;
			this.clickComp();
			}
			this.lcheck76=false;
		}

		addComp77(event:any){
			if(this.lcheck77===true){
			this.listVals=this.l77;
			this.compInput = this.l77;
			this.clickComp();
			}
			this.lcheck77=false;
		}

		addComp78(event:any){
			if(this.lcheck78===true){
			this.listVals=this.l78;
			this.compInput = this.l78;
			this.clickComp();
			}
			this.lcheck78=false;
		}

		addComp79(event:any){
			if(this.lcheck79===true){
			this.listVals=this.l79;
			this.compInput = this.l79;
			this.clickComp();
			}
			this.lcheck79=false;
		}

		addComp80(event:any){
			if(this.lcheck80===true){
			this.listVals=this.l80;
			this.compInput = this.l80;
			this.clickComp();
			}
			this.lcheck80=false;
		}


		clickComp(){
			this.compLists.push(this.compInput);
		}
}
