import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

    a: number;
    queryData: any;
    rForm: FormGroup;
    campCPC: number;
    date: string;
    freeclick: boolean;
    network: string;
    plistaProduct: number;

    productCategories: any[] = [
        { title: 'Product 1', value: 1 },
        { title: 'Product 2', value: 2 },
        { title: 'Product 3', value: 3 },
        { title: 'Product 4', value: 4 },
        { title: 'Product 5', value: 5 },
        { title: 'Product 6', value: 6 },
        { title: 'Product 7', value: 7 },
        { title: 'Product 8', value: 8 },
        { title: 'Product 9', value: 9 },
        { title: 'Product 10', value: 10 },
    ];

    constructor(private route: ActivatedRoute, private fb: FormBuilder) {
        this.rForm = this.fb.group({
            'camp_cpc': [this.campCPC, Validators.required],
            'date': [this.date, Validators.required],
        });
    }

    ngOnInit() {
        this.a = this.route.snapshot.params.a;

        this.route.queryParamMap.subscribe(param => {
            this.campCPC = Number(param.get('camp_cpc'));
            this.date = String(param.get('date'));
            this.freeclick = Boolean(JSON.parse(param.get('freeclick')));
            this.network = String(param.get('network'));
            this.plistaProduct = Number(param.get('plista_product').split(' ')[1]);
            console.log(this.plistaProduct);
        });
    }

    editItem(item) {
        this.campCPC = item.camp_cpc;
        this.date = item.date;
        this.freeclick = item.freeclick;
        this.network = item.network;
        this.productCategory = item.product_category;
    }

}
