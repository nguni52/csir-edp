import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { PopulationService } from '../../../shared/services/population.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      'ID Nation': {
        title: 'ID Nation',
        type: 'string',
      },
      Nation: {
        title: 'Nation',
        type: 'string',
      },
      'ID Year': {
        title: 'ID year',
        type: 'string',
      },
      Year: {
        title: 'Year',
        type: 'string',
      },
      Population: {
        title: 'Population',
        type: 'string',
      },
      'Slug Nation': {
        title: 'Slug Nation',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private populationService: PopulationService) {
    this.populationService.getRemoteDataSource().subscribe((response: any) => {
      this.source.load(response.data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
