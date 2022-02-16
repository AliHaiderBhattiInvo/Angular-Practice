import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @Input('format') format : any
  @HostListener('focus') onFocus() {
    console.log("on focus called!")
  }
  @HostListener('blur') onBlur() {
    console.log("on blur called!")
    let value : string = this.el.nativeElement.value
    if(this.format == 'upperCase') this.el.nativeElement.value = value.toUpperCase()
    else if(this.format == 'lowerCase') this.el.nativeElement.value = value.toLowerCase()
  }


}
