import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MonthAnalyticsView } from '../model/monthAnalyticsView';
import { RequestParams } from '../model/requestParams';

@Injectable({
  providedIn: 'root'
})
export class MonthAnalyticsService {

  constructor(private http: HttpClient) { }

  public getMonthExpensesAnalytics(userId: number, requestParams: RequestParams): Observable<MonthAnalyticsView[]>{
    let parameters = new HttpParams()
    if(requestParams.categoryId) {
      parameters = parameters.append("categoryId", requestParams.categoryId)
    }
    if(requestParams.year) {
      parameters = parameters.append("year", requestParams.year)
    }
    return this.http.get<MonthAnalyticsView[]>(`${environment.analyticsApiUrl}api/analytics/month/expenses/user/${userId}`, {params: parameters})
  }

  public getMonthIncomesAnalytics(userId: number, requestParams: RequestParams): Observable<MonthAnalyticsView[]>{
    let parameters = new HttpParams()
    if(requestParams.year) {
      parameters = parameters.append("year", requestParams.year)
    }
    return this.http.get<MonthAnalyticsView[]>(`${environment.analyticsApiUrl}api/analytics/month/incomes/user/${userId}`, {params: parameters})
  }

  public getMonthBalanceAnalytics(userId: number, requestParams: RequestParams): Observable<MonthAnalyticsView[]>{
    let parameters = new HttpParams()
    if(requestParams.year) {
      parameters = parameters.append("year", requestParams.year)
    }
    return this.http.get<MonthAnalyticsView[]>(`${environment.analyticsApiUrl}api/analytics/month/balance/user/${userId}`, {params: parameters})
  }
}
