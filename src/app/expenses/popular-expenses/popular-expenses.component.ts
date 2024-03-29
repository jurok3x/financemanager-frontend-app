import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpensesAnalyticsView } from '../../model/expensesAnalyticsView';
import { RequestParams } from '../../model/requestParams';
import { ExpensesAnalyticsService } from '../../service/expenses-analytics.service';

@Component({
  selector: 'app-popular-expenses',
  templateUrl: './popular-expenses.component.html',
  styleUrls: ['./popular-expenses.component.css']
})
export class PopularExpensesComponent implements OnInit {

  @Input('categoryId') categoryId!: number
  params!: RequestParams
  popularExpenses$!: Observable<ExpensesAnalyticsView[]>
  displayedColumns: string[] = ['position', 'name', 'price', 'count'];

  constructor(private analyticsService: ExpensesAnalyticsService) { }

  ngOnInit(): void {
    this.params = {categoryId: this.categoryId, limit:5}
    this.popularExpenses$ = this.analyticsService.getExpensesAnalytics(parseInt(localStorage.getItem(environment.userIdName) || ''), this.params)
  }

}
