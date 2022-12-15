import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

@Component({
    selector: 'tabulator',
    templateUrl: './tabulator.component.html',
    styleUrls: ['./tabulator.component.scss']
})
export class TabulatorTableComponent implements OnChanges {
    @Input() tableData: any[] = [];
    @Input() columnNames: any[] = [];
    @Input() height: string = '311px';
    // list properties you want to set per implementation here...

    tab = document.createElement('div');

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.drawTable();
    }

    private drawTable(): void {
        new Tabulator(this.tab, {
            data: this.tableData,
            reactiveData: true,
            columns: this.columnNames,
            layout: 'fitData',
            height: this.height
        });
        document.getElementById('tabular-table')!.appendChild(this.tab);
    }
}