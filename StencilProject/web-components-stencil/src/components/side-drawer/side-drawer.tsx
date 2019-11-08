import { Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'l-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @Prop({reflectToAttr: true}) title: string;
  @Prop() open: boolean;
  
  render() {
    return (
      <aside>
        <header><h1>{this.title}</h1></header>
        <main>
          <slot></slot>
        </main>
      </aside>
    );
  }
}