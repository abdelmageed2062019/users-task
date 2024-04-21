import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 1;
  @Input() totalItems: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  totalPages: number = 1;

  constructor() { }

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }
}
