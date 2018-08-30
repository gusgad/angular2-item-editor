import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  loading = true;

  items$: Object;
  camp_cpc: number;
  date: string;
  total = 100;
  displayedColumns: string[] = ['camp_cpc', 'date', 'edit'];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    setTimeout(() => {
        this.itemService.getItems().subscribe(
            data => {
              console.log(data);
              this.items$ = data;
              this.loading = false;
              this.itemService.saveToSessionStorage(data);
            }
        );
    }, 1500);
  }

}
