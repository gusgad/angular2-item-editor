import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { ItemService } from '../item.service';

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

    a: number; // used as an item ID but the "a" variable name is taken from the actual json key therefore kept as it is
    rForm: FormGroup;
    campCPC: number;
    date: string;
    freeclick: boolean;
    network: string;
    plistaProduct: string;

    // mocked Plista Product categories
    productCategories: any[] = [
        { value: 'Product 1'},
        { value: 'Product 2'},
        { value: 'Product 3'},
        { value: 'Product 4'},
        { value: 'Product 5'},
        { value: 'Product 6'},
        { value: 'Product 7'},
        { value: 'Product 8'},
        { value: 'Product 9'},
        { value: 'Product 10'},
    ];

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private snackBar: MatSnackBar
    ) {
        this.rForm = this.fb.group({
            'camp_cpc': [this.campCPC, Validators.required],
            'date': [this.date, Validators.required],
            'freeclick': [this.freeclick, Validators.required],
            'network': [this.network, Validators.required],
            'PlistaProduct': [null, Validators.required],
        });
    }

    ngOnInit() {
        this.a = Number(this.route.snapshot.params.a);

        this.route.queryParamMap.subscribe(param => {
            this.campCPC = Number(param.get('camp_cpc'));
            this.date = String(param.get('date'));
            this.freeclick = Boolean(JSON.parse(param.get('freeclick'))); // a little trick to convert string to a valid boolean type
            this.network = String(param.get('network'));
            this.plistaProduct = String(param.get('plista_product'));
        });
    }

    editItem(item) {
        this.itemService.editItem(this.a, item);
        this.snackBar.open('Item successfully edited!', 'Close', {
            duration: 5000,
        });
    }

    // helper func to check number fields for validity
    isNumber(val) {
        return typeof val === 'number';
    }

}
