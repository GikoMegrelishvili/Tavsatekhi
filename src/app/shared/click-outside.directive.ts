import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  captured = false;

  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target']) onMouseEnter(
    targetElement
  ) {
    if (!this.captured) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }
  ngOnInit() {
    // fromEvent(document, 'click', { capture: true }).pipe(take(1))
    //   .subscribe(() => this.captured = true);
    document.addEventListener('click', () => this.captured = true, { 
      capture: true,
      once: true
    });
  }
}
