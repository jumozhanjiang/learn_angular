import { BrowserModule } from '@angular/platform-browser';//浏览器解析模块
import { NgModule } from '@angular/core';//angular核心模块
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';//路由模块
import { AppComponent } from './app.component';//根组件
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';

/* @NgModule接收一个元数据对象,告诉Angular如何编译和启动应用 */
@NgModule({
  declarations: [//引入当前项目运行的组件
    AppComponent, HeaderComponent, NewsComponent
  ],
  imports: [//引入当前模块运行依赖的其它组件
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],//定义的服务
  bootstrap: [AppComponent]//指定应用的主视图(跟组件),通过引导根AppModule来启动应用,这里一般写根组件
})
// 根模块不需要导出任何东西,因为其它组件不需要根模块,但是一定要写
export class AppModule { }
