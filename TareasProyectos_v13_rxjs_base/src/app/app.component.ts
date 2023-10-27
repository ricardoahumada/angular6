import { Component } from '@angular/core';
import { of, interval, fromEvent, timer, Subscription } from 'rxjs'
import { bufferTime, debounceTime, map } from 'rxjs/operators'
import { StringService } from './services/string.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output: any = '...';
  private $modelSubscription: Subscription;

  constructor(private _stringService:StringService){
    
  }

  ngOnInit() {
    this.exampleDebouceTime();

    this.$modelSubscription = this._stringService.fetchModels().subscribe((texto:string) => {
      console.log('texto:',texto);
      this.output=texto;
    })
  }

  exampleOf() {
    //emits any number of provided values in sequence
    const source = of(1, 2, 3, 4, 5);
    //output: 1,2,3,4,5
    const subscribe = source.subscribe(val => { console.log(val); this.output = val; });
  }

  exampleOf2() {
    const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
    //output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(val => console.log(val));
  }

  exampleBufferedTime() {
    //Create an observable that emits a value every 500ms
    const source = interval(500);
    /*
    bufferTime also takes second argument, when to start the next buffer (time in ms)
    for instance, if we have a bufferTime of 2 seconds but second argument (bufferCreationInterval) of 1 second:
    ex. output: [0,1,2]...[1,2,3,4,5]...[3,4,5,6,7]
    */
    const example = source.pipe(bufferTime(2000, 1000));
    //Print values to console
    const subscribe = example.subscribe(val =>
      console.log('Start Buffer Every 1s:', val)
    );
  }

  exampleDebouceTime() {
    const input = document.getElementById('example');

    //for every keyup, map to current input value
    const example = fromEvent(input, 'keyup').pipe(map(i => i.currentTarget.value));

    //wait .5s between keyups to emit current value
    //throw away all other values
    const debouncedInput = example.pipe(debounceTime(500));

    //log values
    const subscribe = debouncedInput.subscribe(val => {
      console.log(`Debounced Input: ${val}`);
      this.output = val;
    });
  }

}
