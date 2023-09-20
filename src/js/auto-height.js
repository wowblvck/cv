class AutoHeight {
  static instance;
  elements;

  constructor(breakpoint) {
    if (AutoHeight.instance) {
      throw new Error('New instance cannot be created!');
    }
    AutoHeight.instance = this;
    this.breakpoint = breakpoint;
  }

  setElements = elements => {
    this.elements = elements;
  };

  set = () => {
    this.elements.forEach(element => {
      element.maxHeight = this.getMaxHeight(element.nodeList);
      this.setHeight(element.nodeList, element.maxHeight);
    });

    if (window.innerWidth < this.breakpoint) {
      this.elements.forEach(el => this.resetHeight(el.nodeList));
    }
  };

  getMaxHeight = nodes => {
    return Math.max(
      ...Array.from(nodes).map(node => {
        node.style.height = 'auto';
        return node.offsetHeight;
      }),
    );
  };

  resetHeight = nodes => {
    nodes.forEach(node => {
      node.style.height = 'auto';
    });
  };

  setHeight = (nodes, maxHeight) => {
    nodes.forEach(node => {
      node.style.height = `${maxHeight}px`;
    });
  };
}

const autoHeight = new AutoHeight(768);
export default autoHeight;
