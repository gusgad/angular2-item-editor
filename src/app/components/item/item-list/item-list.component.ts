import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

    loading = true;

    items$: object;
    camp_cpc: number;
    date: string;
    displayedColumns: string[] = ['camp_cpc', 'date', 'edit'];

    constructor(private itemService: ItemService) { }

    ngOnInit() {
        // let's set a timeout to imitate a real request with a latency
        setTimeout(() => {
            this.itemService.getItems().subscribe(
                data => {
                    this.items$ = data;
                    this.loading = false;
                    this.itemService.saveToSessionStorage(data);
                }
            );
        }, 1500);
    }

}
