/* CORE */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* 3RD PARTY */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/* CUSTOM */
import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemNavComponent } from './item-nav/item-nav.component';


@NgModule({
    imports: [
        // CORE
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // 3RD PARTY
        MatMomentDateModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        RouterModule.forRoot(
            [
                { path: '', redirectTo: '/items', pathMatch: 'full' },
                { path: 'items', component: ItemListComponent, data: { depth: 1 }},
                { path: 'items/edit/:a', component: ItemEditComponent, data: { depth: 2 }},
            ]
        )
    ],
    declarations: [ItemComponent, ItemListComponent, ItemEditComponent, ItemNavComponent],
    exports: [ItemComponent, ItemListComponent, ItemEditComponent, ItemNavComponent]
})
export class ItemModule {}
