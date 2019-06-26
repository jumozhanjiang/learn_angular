import { Component, OnInit , AfterViewInit, Input, Output, EventEmitter} from '@angular/core'; // 引入angular核心

@Component({
  selector: 'app-header', // 组件名称
  templateUrl: './header.component.html', // html模板
  styleUrls: ['./header.component.less'] // 样式模板
})
export class HeaderComponent implements OnInit , AfterViewInit { // 实现接口

  @Input() msg: string;
  // tslint:disable-next-line:member-ordering
  @Output() private outer = new EventEmitter<string>();

  // 点击事件触发
  sendParent() {
    // 向外广播信息
    this.outer.emit('该消息来自子组件');
  }


  constructor() { // 构造函数

  }



  ngOnInit() { // 初始化加载声明周期函数
  }

  ngAfterViewInit() { // dom节点渲染完成后进行操作(建议把dom的操作放在这里)

  }

}
