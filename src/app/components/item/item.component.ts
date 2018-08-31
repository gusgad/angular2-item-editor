import { Component } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    animations: [
        trigger('routeAnimation', [
            transition('1 => 2', [
                style({ height: '!' }),
                query(':enter', style({ transform: 'translateX(100%)' })),
                query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
                // animate the leave page away
                group([
                    query(':leave', [
                        animate('0.8s ease-out', style({ transform: 'translateX(-100%)' })),
                    ]),
                    // and now reveal the enter
                    query(':enter', animate('0.8s ease-out', style({ transform: 'translateX(0)' }))),
                ]),
            ]),
            transition('2 => 1', [
                style({ height: '!' }),
                query(':enter', style({ transform: 'translateX(-100%)' })),
                query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
                group([
                    query(':leave', [
                        animate('0.5s ease-out', style({ transform: 'translateX(100%)' })),
                    ]),
                    query(':enter', animate('0.5s ease-out', style({ transform: 'translateX(0)' }))),
                ]),
            ]),
        ])
    ]
    })

export class ItemComponent {

    // Get the depth from route date for specific animation layers
    getDepth(outlet) {
        return outlet.activatedRouteData['depth'];
    }

}
