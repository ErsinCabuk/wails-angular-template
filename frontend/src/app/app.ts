import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  resource,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { interval, map, startWith } from 'rxjs';
import { Greet } from '../../wailsjs/go/main/App';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="text-lg text-indigo-500">
      Current time: {{ date() | date: 'hh:mm:ss a' }}
    </p>

    <button
      class="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
      (click)="greet()"
    >
      Greet
    </button>

    @if (greetResource.hasValue()) {
      <p>{{ greetResource.value() }}</p>
    }

    <router-outlet />
  `,
  imports: [RouterOutlet, DatePipe],
})
export class App {
  private readonly name = signal<string | undefined>(undefined);

  protected readonly greetResource = resource({
    params: this.name,
    loader: ({ params }) => Greet(params),
  });

  protected readonly date = toSignal(
    interval(1000).pipe(
      startWith(Date.now()),
      map(() => Date.now()),
    ),
    { requireSync: true },
  );

  protected greet(): void {
    this.name.set('Angular v21 + Wails');
  }
}
