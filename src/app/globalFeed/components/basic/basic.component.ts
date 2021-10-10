import { Component, OnInit } from "@angular/core"
import { HttpService } from "src/app/shared/services/http.service"

@Component({
  selector: 'mc-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  title = 'this is the way'
  jsonValue = {
    a: 'Helelelo',
    b: 'workkd'
  }
  newDate = new Date()
  user = {
    id: 111,
    name: 'luusean',
    age: '24'
  }

  posts: any

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.posts = this.http.getRequest('https://jsonplaceholder.typicode.com/posts')
  }

  handleClick() {
    this.http.getRequest('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(res => {
        console.log('helloo ==> ', res)
      })
  }

  handleEvent(evt: any) {
    console.log(evt)
  }
}