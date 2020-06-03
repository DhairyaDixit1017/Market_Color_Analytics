import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-company-drop',
  templateUrl: './company-drop.component.html',
 styles: [`

        .hard{
        position:absolute;
        float:left;
        width:28%;
        margin-left:10px;
        margin-top:5px;
        }
        h4{
            margin-top:5px;
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
    `]
})
export class CompanyDropComponent implements OnInit {

  companies: SelectItem[];
  selectedCompanies: string[] = [];

    constructor() {
        this.companies = [
            {label: 'ABT - ABBOTT LABORATORIES', value: 'ABBOTT LABORATORIES'},
            {label: 'ABBV - ABBVIE INC', value: 'ABBVIE INC'},
            {label: 'ACN - ACCENTURE PLC', value: 'ACCENTURE PLC'},
            {label: 'BABA - ALIBABA GROUP HOLDING LTD', value: 'ALIBABA GROUP HOLDING LTD'},
            {label: 'MO - ALTRIA GROUP INC', value: 'ALTRIA GROUP INC'},
            {label: 'AXP - AMERICAN EXPRESS CO', value: 'AMERICAN EXPRESS CO'},
            {label: 'AMT - AMERICAN TOWER CORP', value: 'AMERICAN TOWER CORP'},
            {label: 'AHBIF - ANHEUSER-BUSCH INBEV SA/NV', value: 'ANHEUSER-BUSCH INBEV SA/NV'},
            {label: 'ANTM - ANTHEM INC', value: 'ANTHEM INC'},
            {label: 'AZN - ASTRAZENECA PLC', value: 'ASTRAZENECA PLC'},
            {label: 'T - AT&T INC', value: 'AT&T INC'},
            {label: 'BSBR - BANCO SANTANDER BRASIL SA', value: 'BANCO SANTANDER BRASIL SA'},
            {label: 'BSAC - BANCO SANTANDER CHILE', value: 'BANCO SANTANDER CHILE'},
            {label: 'BSMX - BANCO SANTANDER MEXICO SA INSTITUCION DE BANCA MULTIPLE GRUPO FINANCIERO SANTAND', value: 'BANCO SANTANDER MEXICO SA INSTITUCION DE BANCA MULTIPLE GRUPO FINANCIERO SANTAND'},
            {label: 'BSAR - BANCO SANTANDER RIO SA', value: 'BANCO SANTANDER RIO SA'},
            {label: 'BCDRF - BANCO SANTANDER SA', value: 'BANCO SANTANDER SA'},
            {label: 'BAC - BANK OF AMERICA CORP', value: 'BANK OF AMERICA CORP'},
            {label: 'BNS - BANK OF NOVA SCOTIA/THE', value: 'BANK OF NOVA SCOTIA/THE'},
            {label: 'BDX - BECTON DICKINSON AND CO', value: 'BECTON DICKINSON AND CO'},
            {label: 'BRKA - BERKSHIRE HATHAWAY INC', value: 'BERKSHIRE HATHAWAY INC'},
            {label: 'BLK - BLACKROCK INC', value: 'BLACKROCK INC'},
            {label: 'BMY - BRISTOL-MYERS SQUIBB CO', value: 'BRISTOL-MYERS SQUIBB CO'},
            {label: 'BATMF - BRITISH AMERICAN TOBACCO MALAYSIA BHD', value: 'BRITISH AMERICAN TOBACCO MALAYSIA BHD'},
            {label: 'BTI - BRITISH AMERICAN TOBACCO PLC', value: 'BRITISH AMERICAN TOBACCO PLC'},
            {label: 'CNI - CANADIAN NATIONAL RAILWAY CO', value: 'CANADIAN NATIONAL RAILWAY CO'},
            {label: 'CAT - CATERPILLAR INC', value: 'CATERPILLAR INC'},
            {label: 'LFC - CHINA LIFE INSURANCE CO LTD', value: 'CHINA LIFE INSURANCE CO LTD'},
            {label: 'SNP - CHINA PETROLEUM  CHEMICAL CORP', value: 'CHINA PETROLEUM  CHEMICAL CORP'},
            {label: 'C - CITIGROUP INC', value: 'CITIGROUP INC'},
            {label: 'CVS - CVS HEALTH CORP', value: 'CVS HEALTH CORP'},
            {label: 'DEO - DIAGEO PLC', value: 'DIAGEO PLC'},
            {label: 'D - DOMINION ENERGY INC', value: 'DOMINION ENERGY INC'},
            {label: 'DUK - DUKE ENERGY CORP', value: 'DUKE ENERGY CORP'},
            {label: 'LLY - ELI LILLY AND CO', value: 'ELI LILLY AND CO'},
            {label: 'ENB - ENBRIDGE IN', value: 'ENBRIDGE IN'},
            {label: 'EQNR - EQUINOR ASA', value: 'EQUINOR ASA'},
            {label: 'EL - ESTEE LAUDER COS INCTHE', value: 'ESTEE LAUDER COS INCTHE'},
            {label: 'XOM - EXXON MOBIL CORP', value: 'EXXON MOBIL CORP'},
            {label: 'FIS - FIDELITY NATIONAL INFORMATION SERVICES INC', value: 'FIDELITY NATIONAL INFORMATION SERVICES INC'},
            {label: 'GE - GENERAL ELECTRIC CO', value: 'GENERAL ELECTRIC CO'},
            {label: 'GSK - GLAXOSMITHKLINE PLC', value: 'GLAXOSMITHKLINE PLC'},
            {label: 'GS - GOLDMAN SACHS GROUP INC/THE', value: 'GOLDMAN SACHS GROUP INC/THE'},
            {label: 'HD - HOME DEPOT INCTHE', value: 'HOME DEPOT INCTHE'},
            {label: 'HON - HONEYWELL INTERNATIONAL INC', value: 'HONEYWELL INTERNATIONAL INC'},
            {label: 'HSBC - HSBC HOLDINGS PLC', value: 'HSBC HOLDINGS PLC'},
            {label: 'JNJ - JOHNSON & JOHNSON', value: 'JOHNSON & JOHNSON'},
            {label: 'JPM - JPMORGAN CHASE  CO', value: 'JPMORGAN CHASE  CO'},
            {label: 'LMT - LOCKHEED MARTIN CORP', value: 'LOCKHEED MARTIN CORP'},
            {label: 'LWLCF - LOWELL COPPER LTD', value: 'LOWELL COPPER LTD'},
            {label: 'MA - MASTERCARD INC', value: 'MASTERCARD INC'},
            {label: 'MDT - MEDTRONIC PLC', value: 'MEDTRONIC PLC'},
            {label: 'MBFJF - MITSUBISHI UFJ FINANCIAL GROUP INC', value: 'MITSUBISHI UFJ FINANCIAL GROUP INC'},
            {label: 'MS - MORGAN STANLEY', value: 'MORGAN STANLEY'},
            {label: 'NEE - NEXTERA ENERGY INC', value: 'NEXTERA ENERGY INC'},
            {label: 'NKE - NIKE INC', value: 'NIKE INC'},
            {label: 'NVS - NOVARTIS AG', value: 'NOVARTIS AG'},
            {label: 'NVO - NOVO NORDISK A/S', value: 'NOVO NORDISK A/S'},
            {label: 'PBR - PETROLEO BRASILEIRO SA', value: 'PETROLEO BRASILEIRO SA'},
            {label: 'PFE - PFIZER INC', value: 'PFIZER INC'},
            {label: 'PM - PHILIP MORRIS INTERNATIONAL INC', value: 'PHILIP MORRIS INTERNATIONAL INC'},
            {label: 'PNC - PNC FINANCIAL SERVICES GROUP INC/THE', value: 'PNC FINANCIAL SERVICES GROUP INC/THE'},
            {label: 'RIO - RIO TINTO PLC', value: 'RIO TINTO PLC'},
            {label: 'RY - ROYAL BANK OF CANADA', value: 'ROYAL BANK OF CANADA'},
            {label: 'RDSA - ROYAL DUTCH SHELL PLC', value: 'ROYAL DUTCH SHELL PLC'},
            {label: 'CRM - SALESFORCE.COM INC', value: 'SALESFORCE.COM INC'},
            {label: 'SAP - SAP SE', value: 'SAP SE'},
            {label: 'TSM - TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD', value: 'TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD'},
            {label: 'TMO - THERMO FISHER SCIENTIFIC INC', value: 'THERMO FISHER SCIENTIFIC INC'},
            {label: 'TM - TOYOTA MOTOR CORP', value: 'TOYOTA MOTOR CORP'},
            {label: 'UN - UNILEVER NV', value: 'UNILEVER NV'},
            {label: 'UNP - UNION PACIFIC CORP', value: 'UNION PACIFIC CORP'},
            {label: 'UPS - UNITED PARCEL SERVICE INC', value: 'UNITED PARCEL SERVICE INC'},
            {label: 'UTX - UNITED TECHNOLOGIES CORP', value: 'UNITED TECHNOLOGIES CORP'},
            {label: 'UNH - UNITEDHEALTH GROUP INC', value: 'UNITEDHEALTH GROUP INC'},
            {label: 'UNH - UNITEDHEALTH GROUP INC', value: 'UNITEDHEALTH GROUP INC'},
            {label: 'VZ - VERIZON COMMUNICATIONS INC', value: 'VERIZON COMMUNICATIONS INC'},
            {label: 'V - VISA INC', value: 'VISA INC'},
            {label: 'VMW - VMWARE INC', value: 'VMWARE INC'},
            {label: 'WMT - WALMART INC', value: 'WALMART INC'},
            {label: 'WFC - WELLS FARGO & CO', value: 'WELLS FARGO & CO'},

        ];

    }


  ngOnInit(): void {
  }

}
