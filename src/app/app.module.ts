import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

	
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { HeaderComponent } from './component/header/header.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { ModalModule } from './_modal';
import { FilterPipe } from './fliter.pipe';
import { DropDownComponent } from './component/drop-down/drop-down.component';
import { LanguageInterceptor } from './interceptor/language-interceptor';








@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    HeaderComponent,
    TodoListComponent,
    FilterPipe,
    DropDownComponent
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule,
   
    
    
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
