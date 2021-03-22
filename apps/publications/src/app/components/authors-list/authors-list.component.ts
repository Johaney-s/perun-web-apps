import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Author } from '@perun-web-apps/perun/openapi';
import {
  customDataSourceFilterPredicate,
  customDataSourceSort, parseAttribute, parseName,
  TABLE_ITEMS_COUNT_OPTIONS
} from '@perun-web-apps/perun/utils';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'perun-web-apps-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements AfterViewInit, OnChanges {

  constructor() { }

  @Input()
  authors: Author[] = [];
  @Input()
  filterValue: string;
  @Input()
  pageSize = 10;
  @Input()
  displayedColumns: string[] = ['id', 'name', 'organization', 'email', 'numberOfPublications'];
  @Input()
  pageSizeOptions = TABLE_ITEMS_COUNT_OPTIONS;
  @Output()
  page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  private sort: MatSort;
  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  dataSource: MatTableDataSource<Author>;

  exporting = false;

  private paginator: MatPaginator;

  @ViewChild(MatPaginator, { static: true }) set matPaginator(pg: MatPaginator) {
    this.paginator = pg;
  };

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Author>(this.authors);
    this.setDataSource();
    this.dataSource.filter = this.filterValue;
  }


  private setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.filterPredicate = (data: Author, filter: string) => {
        return customDataSourceFilterPredicate(data, filter, this.displayedColumns, this.getFilterDataForColumn, this)
      };
      this.dataSource.sortData = (data: Author[], sort: MatSort) => {
        return customDataSourceSort(data, sort, this.getSortDataForColumn, this);
      };
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  getSortDataForColumn(data: Author, column: string):string {
    switch (column) {
      case 'id':
        return data.id.toString();
      case 'name':
        return data.lastName ? data.lastName : data.firstName ?? '';
      case 'organization':
        return parseAttribute(data, 'organization');
      case 'email':
        return parseAttribute(data, 'preferredMail');
      case 'numberOfPublications':
        return data.authorships.length.toString();
      default:
        return data[column];
    }
  }

  getFilterDataForColumn(data: Author, column: string):string {
    switch (column) {
      case 'id':
        return data.id.toString();
      case 'name':
        return parseName(data);
      case 'organization':
        return parseAttribute(data, 'organization');
      case 'email':
        return parseAttribute(data, 'preferredMail');
      case 'numberOfPublications':
        return data.authorships.length.toString();
      default:
        return data[column];
    }
  }

  parseAttribute(data: Author, nameOfAttribute: string) {
    let attribute = '';
    if (data.attributes) {
      data.attributes.forEach(attr => {
        if (attr.friendlyName === nameOfAttribute) {
          attribute = <string><unknown>attr.value;
        }
      });
    }
    return attribute;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}