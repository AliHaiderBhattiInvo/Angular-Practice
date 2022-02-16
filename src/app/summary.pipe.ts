import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: any, limit?: number) {
        if(!value) return null
        else if(limit) return value.substr(0,10) + "..."
        else return value.substr(0,50) + "..."
    }
}