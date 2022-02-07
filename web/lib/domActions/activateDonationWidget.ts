export const activateDonationWidget = () => {
  const simulateClick = (elem: any) =>
    elem.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

  const widget = document.getElementById('harness-widget')?.querySelector('.h-widget-button');

  if (widget) {
    simulateClick(widget);
  }
};
