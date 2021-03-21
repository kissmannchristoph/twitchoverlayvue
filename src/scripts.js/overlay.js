class Widget {
  constructor(name, component, style) {
    this.name = name;
    this.component = component;
    this.style = style;
  }
}

class manipulateOverlay {
  constructor() {
    this.visibleWidgets = [];
  }

  getVisible() {
    return this.visibleWidgets;
  }

  styleArrayToString(arr) {
    let sstring = "";

    for (let i = 0; arr.length > i; i++) {
      sstring = sstring + arr[i] + ";";
    }
    return sstring;
  }

  addComponent(c) {
    let style = ["position: absolute", "top:0px"];
    c.setStyle(this.styleArrayToString(style));
  }

  enableWidget(widgetIndex, components) {
    this.visibleWidgets.push(
      new Widget(components[widgetIndex].name, components[widgetIndex], "")
    );
  }

  disableWidget(widget) {
      this.visibleWidgets.remove(widget)
  }
}

export default new manipulateOverlay();
