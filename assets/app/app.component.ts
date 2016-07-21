import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <input type="text" [(ngModel)]="message.content">
            </section>
        </div>
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <article class="panel panel-default">
                    <div class="panel-body">
                        {{ message.content }} 
                    </div>
                    <footer class="panel-footer">
                        <div class="author">
                            {{ message.author }} 
                        </div>
                        <div class="config">
                            <a href="#">Edit</a>
                            <a href="#">Delete</a>
                        </div>
                    </footer>
                </article>
            </section> 
        </div>
    `,
    styles: [`
        .author {
            display: inline-block; 
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%; 
        }
    `]
})
export class AppComponent {
    message = {
        content: 'A message',
        author: 'Max'
    };
}