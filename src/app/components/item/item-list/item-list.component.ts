import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ItemService } from '../item.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    loading = true;

    dataSource$: any;
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
                    this.dataSource$ = new MatTableDataSource(data);
                    this.loading = false;
                    this.itemService.saveToSessionStorage(data);
                }
            );
        }, 1500);
    }

    /*
    this part is not covered in official docs,
    workaround for material pagination here: https://stackoverflow.com/questions/48785965/angular-matpaginator-not-working
    */
    ngAfterViewInit() {
        setTimeout(() => {
            this.dataSource$.paginator = this.paginator;
        }, 1500);
    }

}
