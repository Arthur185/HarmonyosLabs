@Component
struct AppBar {
  @Prop private title: string = '';

  @Builder
  leadingBuilder() {
  }

  @Builder
  tailingBuilder() {
  }

  @BuilderParam leading: () => void = this.leadingBuilder;
  @BuilderParam tailing: () => void = this.tailingBuilder;

  build() {
    Row() {
      this.leading()
      Text(this.title)
        .fontSize(20).fontWeight(FontWeight.Bold)
        .fontColor($r('sys.color.white'))
      this.tailing()
    }
    .backgroundColor('#317bd4')
    .width('100%')
    .height(56)
    .padding(20)
    .justifyContent(FlexAlign.SpaceBetween)
  }
}

// 确保导出组件
export default AppBar;