import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  products:[];
  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;
constructor() { }

ngOnInit() {
  this.products = JSON.parse(localStorage.getItem('watch_items'));
  console.log(this.products);
  this.sortOptions = [
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'}
];

// this.primengConfig.ripple = true;
}

removeList(movie: any) {
  var itemId = movie.id;
  let storagItems = JSON.parse(localStorage.getItem("watch_items"));
  let items = storagItems.filter((item) => item.item.id !== itemId);
  localStorage.setItem("watch_items", JSON.stringify(items));
  console.log(localStorage.getItem("watch_items"));
  this.ngOnInit();

}

onSortChange(event) {
  let value = event.value;

  if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  }
  else {
      this.sortOrder = 1;
      this.sortField = value;
  }
}
navigate(id:any, type:any)
  {
    console.log(id,"\n",type);
  }
}
