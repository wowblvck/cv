const BREAKPOINT = 768;

const getMaxHeight = elements => {
  return Math.max(
    ...Array.from(elements).map(e => {
      e.style.height = 'auto';
      return e.offsetHeight;
    })
  );
};

const setHeight = (wrappers, maxHeight) => {
  wrappers.forEach(w => {
    w.style.height = `${maxHeight}px`;
  });
};

const resetHeight = wrappers => {
  wrappers.forEach(w => {
    w.style.height = 'auto';
  });
};

const setWrappersHeight = () => {
  const elements = [
    {
      nodeList: document.querySelectorAll('.education-list__time'),
      maxHeight: -1,
    },
    {
      nodeList: document.querySelectorAll('.education-list__specialty'),
      maxHeight: -1,
    },
    {
      nodeList: document.querySelectorAll('.education-list__university'),
      maxHeight: -1,
    },
    {
      nodeList: document.querySelectorAll('.education-list__description'),
      maxHeight: -1,
    },
  ];

  elements.forEach(element => {
    element.maxHeight = getMaxHeight(element.nodeList);
    setHeight(element.nodeList, element.maxHeight);
  });

  if (window.innerWidth < BREAKPOINT) {
    elements.forEach(el => resetHeight(el.nodeList));
  }
};

window.addEventListener('resize', setWrappersHeight);

export { setWrappersHeight };
