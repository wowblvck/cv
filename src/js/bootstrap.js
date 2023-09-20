import autoHeight from './auto-height';

window.addEventListener('DOMContentLoaded', () => {
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
  autoHeight.setElements(elements);
  autoHeight.set();
});

window.addEventListener('resize', () => autoHeight.set());
