import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'even',
    pure: false // re-apply pipe when array changed
})

export class EvenPipe implements PipeTransform {
    transform(arr: Array<number>) : Array<number> {
        return arr.filter(n => n % 2 == 0)
    }

}
