import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {DataservService} from '../dataserv.service';

@Component({
  selector: 'app-company-drop',
  templateUrl: './company-drop.component.html',
 styles: [`

        .hard{
        position:absolute;
        float:left;
        width:20%;
        margin-left:10px;
        margin-top:0px;
        }

        .work{
        position:absolute;
        float:left;
        width:20%;
        margin-left:300px;
        margin-top:0px;
        }

        .Sto{
        position:absolute;
        margin-left: 1130px;
        margin-top:45px;
        border-radius: 6px;
        border: 2px solid lightblue;
        transition-duration: 0.4s;
        }

        .Vol{
        position:absolute;
        margin-left: 1290px;
        margin-top:45px;
        border-radius: 6px;
        border: 2px solid lightblue;
        transition-duration: 0.4s;
        }

        h4{
            margin-top:0px;
        }

        p{
            font-size:14px;
        }

        :host ::ng-deep .ui-multiselect {
            min-width: 15em;
        }
        :host ::ng-deep .ui-multiselected-item-token,
        :host ::ng-deep .ui-multiselected-empty-token {
            padding: 2px 4px;
            margin: 0 0.286em 0 0;
            display: inline-block;
            vertical-align:middle;
            height: 1.857em;
        }
        :host ::ng-deep .ui-multiselected-item-token {
            background: #007ad9;
            color: #ffffff;
        }
        :host ::ng-deep .ui-multiselected-empty-token {
            background: #d95f00;
            color: #ffffff;
        }

        .almost{
            position:absolute;
            margin-top:110px;
        }
    `]
})
export class CompanyDropComponent implements OnInit {

  public companies: SelectItem[];
  public selectedCompanies: string[] = [];
  public shareCompanies: string[];
  public sectors: SelectItem[];
  public selectedSectors: string[] = [];
  public shareSectors: string[];
  public decider:string;
  public data = [];
  data2:any;
  choose=false;
  users: User[];
  cols: any[];


  sendVals(){
    if(this.shareSectors.length==0)
    {
      console.log(100);
      this._dataService.getDataS(this.shareCompanies)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.datasets = this.data;
          console.log(data);
        });
    }
    else if(this.shareCompanies.length==0)
    {
      console.log(500);
      this._dataService.getDataSecP(this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.datasets = this.data;
          console.log(data);
        });
    }
    else{
      console.log(3000);
      this._dataService.getDataAllP(this.shareCompanies,this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.datasets = this.data;
          console.log(data);
        });

    }
  }

  sendVols(){
     if(this.shareSectors.length==0)
    {
    console.log(100);
    this._dataService.getDataV(this.shareCompanies)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.datasets = this.data;
          console.log(data);
        });
    }
    else if(this.shareCompanies.length==0)
    {
      console.log(500);
      this._dataService.getDataSecV(this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.datasets = this.data;
          console.log(data);
        });
    }
    else{
      console.log(3000);
      this._dataService.getDataAllV(this.shareCompanies,this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.datasets = this.data;
          console.log(data);
        });

    }
  }

  setchoose(){
      this.choose=true;
  }


    constructor(private _dataService: DataservService) {

        this.data2 = 
        {
            labels: ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today']
        }

        this.companies = [
            {label: 'AAPL - APPLE INC', value: 'AAPL'},
            {label: 'ABT - ABBOTT LABORATORIES', value: 'ABT'},
            {label: 'ABBV - ABBVIE INC', value: 'ABBV'},
            {label: 'ACN - ACCENTURE PLC', value: 'ACN'},
            {label: 'AMD - ADVANCED MICRO DEVICES', value: 'AMD'},
            {label: 'BABA - ALIBABA GROUP HOLDING LTD', value: 'BABA'},
            {label: 'MO - ALTRIA GROUP INC', value: 'MO'},
            {label: 'AXP - AMERICAN EXPRESS CO', value: 'AXP'},
            {label: 'AMT - AMERICAN TOWER CORP', value: 'AMT'},
            {label: 'ANTM - ANTHEM INC', value: 'ANTM'},
            {label: 'AINV - APOLLO INVESTMENT CORP', value: 'AINV'},
            {label: 'AZN - ASTRAZENECA PLC', value: 'AZN'},
            {label: 'T - AT&T INC', value: 'T'},
            {label: 'BKR - BAKER HUGHES CO', value: 'BKR'},
            {label: 'BSBR - BANCO SANTANDER BRASIL SA', value: 'BSBR'},
            {label: 'BSAC - BANCO SANTANDER CHILE', value: 'BSAC'},
            {label: 'BSMX - BANCO SANTANDER MEXICO SA INSTITUCION DE BANCA MULTIPLE GRUPO FINANCIERO SANTAND', value: 'BSMX'},
            {label: 'BCDRF - BANCO SANTANDER SA', value: 'BCDRF'},
            {label: 'BAC - BANK OF AMERICA CORP', value: 'BAC'},
            {label: 'BNS - BANK OF NOVA SCOTIA/THE', value: 'BNS'},
            {label: 'BBBY - BED BATH & BEYOND INC', value: 'BBBY'},
            {label: 'BDX - BECTON DICKINSON AND CO', value: 'BDX'},
            {label: 'BBY - BEST BUY CO INC', value: 'BBY'},
            {label: 'BLK - BLACKROCK INC', value: 'BLK'},
            {label: 'BMY - BRISTOL-MYERS SQUIBB CO', value: 'BMY'},
            {label: 'BTI - BRITISH AMERICAN TOBACCO PLC', value: 'BTI'},
            {label: 'CNI - CANADIAN NATIONAL RAILWAY CO', value: 'CNI'},
            {label: 'CAT - CATERPILLAR INC', value: 'CAT'},
            {label: 'CATY - CATHAY GENERAL BANCORP', value: 'CATY'},
            {label: 'LFC - CHINA LIFE INSURANCE CO LTD', value: 'LFC'},
            {label: 'SNP - CHINA PETROLEUM  CHEMICAL CORP', value: 'SNP'},
            {label: 'C - CITIGROUP INC', value: 'C'},
            {label: 'COST - COSTCO WHOLESALE CORP', value: 'COST'},
            {label: 'CVS - CVS HEALTH CORP', value: 'CVS'},
            {label: 'DB - DEUTSCHE BANK AG-REGISTERED', value: 'DB'},
            {label: 'DEO - DIAGEO PLC', value: 'DEO'},
            {label: 'D - DOMINION ENERGY INC', value: 'D'},
            {label: 'DPZ - DOMINOS PIZZA INC', value: 'DPZ'},
            {label: 'DUK - DUKE ENERGY CORP', value: 'DUK'},
            {label: 'EIGR - EIGER BIOPHARMACEUTICALS INC', value: 'EIGR'},
            {label: 'LLY - ELI LILLY AND CO', value: 'LLY'},
            {label: 'ENB - ENBRIDGE IN', value: 'ENB'},
            {label: 'EFX - EQUIFAX INC', value: 'EFX'},
            {label: 'EQNR - EQUINOR ASA', value: 'EQNR'},
            {label: 'EL - ESTEE LAUDER COS INCTHE', value: 'EL'},
            {label: 'ETON - ETON PHARMACEUTICALS INC', value: 'ETON'},
            {label: 'XOM - EXXON MOBIL CORP', value: 'XOM'},
            {label: 'FDX - FEDEX CORP', value: 'FDX'},
            {label: 'FCAU - FIAT CHRYSLER AUTOMOBILES NV', value: 'FCAU'},
            {label: 'FIS - FIDELITY NATIONAL INFORMATION SERVICES INC', value: 'FIS'},
            {label: 'FTS - FORTIS INC', value: 'FTS'},
            {label: 'GE - GENERAL ELECTRIC CO', value: 'GE'},
            {label: 'GSK - GLAXOSMITHKLINE PLC', value: 'GSK'},
            {label: 'GS - GOLDMAN SACHS GROUP INC/THE', value: 'GS'},
            {label: 'GRPN - GROUPON INC', value: 'GRPN'},
            {label: 'GRUB - GRUBHUB INC', value: 'GRUB'},
            {label: 'HOG - HARLEY-DAVIDSON INC', value: 'HOG'},
            {label: 'HPE - HEWLETT PACKARD ENTERPRISE', value: 'HPE'},
            {label: 'HD - HOME DEPOT INCTHE', value: 'HD'},
            {label: 'HON - HONEYWELL INTERNATIONAL INC', value: 'HON'},
            {label: 'HSBC - HSBC HOLDINGS PLC', value: 'HSBC'},
            {label: 'JNJ - JOHNSON & JOHNSON', value: 'JNJ'},
            {label: 'JPM - JPMORGAN CHASE  CO', value: 'JPM'},
            {label: 'K - KELLOGG CO', value: 'K'},
            {label: 'KEYS - KEYSIGHT TECHNOLOGIES IN', value: 'KEYS'},
            {label: 'LMT - LOCKHEED MARTIN CORP', value: 'LMT'},
            {label: 'MA - MASTERCARD INC', value: 'MA'},
            {label: 'MDT - MEDTRONIC PLC', value: 'MDT'},
            {label: 'MCHP - MICROCHIP TECHNOLOGY INC', value: 'MCHP'},
            {label: 'MBFJF - MITSUBISHI UFJ FINANCIAL GROUP INC', value: 'MBFJF'},
            {label: 'MS - MORGAN STANLEY', value: 'MS'},
            {label: 'MUR - MURPHY OIL CORP', value: 'MUR'},
            {label: 'NEE - NEXTERA ENERGY INC', value: 'NEE'},
            {label: 'NKE - NIKE INC', value: 'NKE'},
            {label: 'NVS - NOVARTIS AG', value: 'NVS'},
            {label: 'NVO - NOVO NORDISK A/S', value: 'NVO'},
            {label: 'NVDA - NVIDIA CORP', value: 'NVDA'},
            {label: 'PBR - PETROLEO BRASILEIRO SA', value: 'PBR'},
            {label: 'PFE - PFIZER INC', value: 'PFE'},
            {label: 'PM - PHILIP MORRIS INTERNATIONAL INC', value: 'PM'},
            {label: 'PNC - PNC FINANCIAL SERVICES GROUP INC/THE', value: 'PNC'},
            {label: 'PROCTER & GAMBLE CO/THE', value: 'PG'},
            {label: 'RIO - RIO TINTO PLC', value: 'RIO'},
            {label: 'RY - ROYAL BANK OF CANADA', value: 'RY'},
            {label: 'CRM - SALESFORCE.COM INC', value: 'CRM'},
            {label: 'SAP - SAP SE', value: 'SAP'},
            {label: 'WORK - SLACK TECHNOLOGIES INC- CL A', value: 'WORK'},
            {label: 'TSM - TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD', value: 'TSM'},
            {label: 'TMO - THERMO FISHER SCIENTIFIC INC', value: 'TMO'},
            {label: 'TM - TOYOTA MOTOR CORP', value: 'TM'},
            {label: 'UN - UNILEVER NV', value: 'UN'},
            {label: 'UNP - UNION PACIFIC CORP', value: 'UNP'},
            {label: 'UPS - UNITED PARCEL SERVICE INC', value: 'UPS'},
            {label: 'UTX - UNITED TECHNOLOGIES CORP', value: 'UTX'},
            {label: 'UNH - UNITEDHEALTH GROUP INC', value: 'UNH'},
            {label: 'V - VISA INC', value: 'V'},
            {label: 'VMW - VMWARE INC', value: 'VMW'},
            {label: 'WMT - WALMART INC', value: 'WMT'},
            {label: 'DIS - WALT DISNEY CO/THE', value: 'DIS'},
            {label: 'WFC - WELLS FARGO & CO', value: 'WFC'},

        ];

         this.sectors = [
            {label: 'BASIC INDUSTRIES', value: 'Basic Industries'},
            {label: 'CAPITAL GOODS', value: 'Capital Goods'},
            {label: 'CONSUMER NON-DURABLES', value: 'Consumer Non-Durables'},
            {label: 'CONSUMER SERVICES', value: 'Consumer Services'},
            {label: 'ENERGY', value: 'Energy'},
            {label: 'FINANCE', value: 'Finance'},
            {label: 'HEALTH CARE', value: 'Health Care'},
            {label: 'MISCELLANEOUS', value: 'Miscellaneous'},
            {label: 'PUBLIC UTILITIES', value: 'Public Utilities'},
            {label: 'RETAIL', value: 'Retail'},
            {label: 'TECHNOLOGY', value: 'Technology'},
            {label: 'TRANSPORTATION', value: 'Transportation'},
            
        ];


    }
  ngOnInit(): void {
    this._dataService.cast1.subscribe(decider=> this.decider=decider);
    this._dataService.ultra1.subscribe(shareCompanies=> this.shareCompanies=shareCompanies);
    this._dataService.ultra2.subscribe(shareSectors=> this.shareSectors=shareSectors);
    this.users = [
      { month: 'January', pre: '65',post:'28' },
      { month: 'February', pre: '59',post:'48' },
      { month: 'March', pre: '80',post:'40' },
      { month: 'April', pre: '81',post:'19' },
      { month: 'May', pre: '56',post:'86' },
      { month: 'June', pre: '55',post:'27' },
      { month: 'July', pre: '40',post:'90' },
  ];
    this.cols = [
        { field: 'month', header: 'Month' },
        { field: 'pre', header: 'PRE-COVID' },
        { field: 'post', header: 'POST-COVID' },
    ];
  }

  setPrice(){
    this._dataService.editHola1(this.selectedCompanies);
    this._dataService.editHola2(this.selectedSectors);
    console.log(this.shareCompanies);
    console.log(this.shareSectors);
    this._dataService.editInterim1("Price");
}

setVolume(){
    this._dataService.editHola1(this.selectedCompanies);
    this._dataService.editHola2(this.selectedSectors);
    console.log(this.shareCompanies);
    console.log(this.shareSectors);
    this._dataService.editInterim1("Volume");
}

}
export interface User {
  month;
  pre;
  post;
}
