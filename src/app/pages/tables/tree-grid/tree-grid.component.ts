import {Component, Input} from '@angular/core';
import {PopulationService} from '../../../shared/services/population.service';

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class TreeGridComponent {
  public nodeItems = [];

  constructor(private populationService: PopulationService) {
    this.populationService.getRemoteDataSource().subscribe((response: any) => {
      this.processData(response);
    });
  }

  private processData(response: any) {
    let uniqueItems = [];
    response.data.forEach((curr: any, index: number) => {
      // process top level ID NATION
      const item = curr['ID Nation'];
      if (uniqueItems.indexOf(item) === -1) {
        const myItem = {
          id: index,
          name: item,
        };
        uniqueItems.push(item);
        this.nodeItems.push(myItem);
      }
    });

    uniqueItems = [];
    const nationItems = [];
    response.data.forEach((curr: any, index: number) => {
      // process top level NATION
      const item = curr['Nation'];
      if (uniqueItems.indexOf(item) === -1) {
        const myItem = {
          id: index + 1,
          name: item,
          item: {
            phrase: item,
          },
        };
        uniqueItems.push(item);
        nationItems.push(myItem);
      }
    });
    this.nodeItems[0]['children'] = nationItems;

    this.nodeItems = [{
      id: '0',
      name: '01000US',
      children: [
        {
          id: '1',
          name: 'United States',
          item: {
            phrase: 'United States',
          },
          children: [
            {
              id: '1',
              name: '2020',
              item: {
                phrase: '2020',
              },
              children: [{
                id: '1',
                name: '326569308',
                item: {
                  phrase: '326569308',
                },
              }],
            },
            {
              id: '1',
              name: '2019',
              item: {
                phrase: '2019',
              },
              children: [{
                id: '1',
                name: '324697795',
                item: {
                  phrase: '324697795',
                },
              }],
            },
            {
              id: '1',
              name: '2018',
              item: {
                phrase: '2018',
              },
              children: [{
                id: '1',
                name: '322903030',
                item: {
                  phrase: '322903030',
                },
              }],
            },
            {
              id: '1',
              name: '2017',
              item: {
                phrase: '2017',
              },
              children: [{
                id: '1',
                name: '321004407',
                item: {
                  phrase: '321004407',
                },
              }],
            },
            {
              id: '1',
              name: '2016',
              item: {
                phrase: '2016',
              },
              children: [{
                id: '1',
                name: '318558162',
                item: {
                  phrase: '318558162',
                },
              }],
            },
            {
              id: '1',
              name: '2015',
              item: {
                phrase: '2015',
              },
              children: [{
                id: '1',
                name: '316515021',
                item: {
                  phrase: '316515021',
                },
              }],
            },
            {
              id: '1',
              name: '2014',
              item: {
                phrase: '2014',
              },
              children: [{
                id: '1',
                name: '314107084',
                item: {
                  phrase: '314107084',
                },
              }],
            },
            {
              id: '1',
              name: '2013',
              item: {
                phrase: '2013',
              },
              children: [{
                id: '1',
                name: '311536594',
                item: {
                  phrase: '311536594',
                },
              }],
            }],
        },
      ],
    }];
  }
}
