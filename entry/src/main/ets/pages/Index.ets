import AppBar from '../components/AppBar';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  @State counter: number = 0

  @Builder
  tailing() {
    SymbolGlyph($r('sys.symbol.dot_grid_1x2'))
      .fontSize(24)
      .fontColor([Color.White])
      .fontWeight(FontWeight.Bold)
  }

  @Builder
  leading() {
    SymbolGlyph($r('sys.symbol.access_card'))
      .fontSize(24)
      .fontColor([Color.White])
      .fontWeight(FontWeight.Bold)
  }

  build() {
    // RelativeContainer() {
    //   Text(this.message)
    //     .id('HelloWorld')
    //     .fontSize(50)
    //     .fontWeight(FontWeight.Bold)
    //     .alignRules({
    //       center: { anchor: '__container__', align: VerticalAlign.Center },
    //       middle: { anchor: '__container__', align: HorizontalAlign.Center }
    //     })
    // }
    // .height('100%')
    // .width('100%')
    Stack() {
      Column() {
        AppBar({ title: '计数器', leading: this.leading, tailing: this.tailing })
        Column() {
          Text('下面是你点击按钮的次数')
            .fontSize(18)
          Text(this.counter.toString())
            .fontSize(36)
            .fontColor('#2e3032')
            .margin(10)
        }
        // .backgroundColor('#44ff00ff')
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
      }
      .backgroundColor('#44ff0000')
      .alignItems(HorizontalAlign.Start)

      .width('100%')
      .height('100%')

      Button({ type: ButtonType.Circle, stateEffect: true }) {
        SymbolGlyph($r('sys.symbol.plus_circle_fill'))
          .fontSize(24)
          .fontColor([Color.White])
          .fontWeight(FontWeight.Bold)
      }
      .onClick(() => this.counter++)
      .width(56)
      .height(56)
      .margin(20)
      .backgroundColor('#317bd4')
    }.alignContent(Alignment.BottomEnd)
  }
}

