import { NewService } from './new.service';
import { Injectable } from '@angular/core';

@Injectable()

export class TestService {

    constructor(private newSer: NewService) { }

    print() {
        console.log('Hello World!')
    }
}