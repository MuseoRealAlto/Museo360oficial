export class HeaderScroll {
  static cachedHeader = null;
  static lastHeight = 0;
  static isUpdating = false;

  static init() {
    this.cachedHeader = document.querySelector('header');
    if (!this.cachedHeader) return;

    const resizeObserver = new ResizeObserver(() => {
      this.updateScrollPadding();
    });

    resizeObserver.observe(this.cachedHeader);

    // Primera ejecución
    this.updateScrollPadding();
  }

  static updateScrollPadding() {
    if (this.isUpdating || !this.cachedHeader) return;
    this.isUpdating = true;

    requestAnimationFrame(() => {
      const headerHeight = this.cachedHeader.offsetHeight;

      // Evita recalcular si no cambia
      if (headerHeight !== this.lastHeight) {
        this.lastHeight = headerHeight;
        document.documentElement.style.scrollPaddingTop = `${headerHeight}px`;
      }

      this.isUpdating = false;
    });
  }
}
