import { Component, OnChanges, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input('rating') rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = 
            new EventEmitter<string>();
    ngOnChanges(): void
    {
        this.starWidth = this.rating * 75 / 5;
    }

    OnClick() : void
    {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

}