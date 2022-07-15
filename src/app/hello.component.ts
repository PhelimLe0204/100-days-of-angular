import { Component } from "@angular/core";
@Component({
  selector: "app-hello",
  template: `
    <h2>Chào đằng đó!</h2>
    <h3>Tên: {{ user.name }}</h3>
    <p>Tuổi: {{ user.age }}</p>
    <button (click)="showInfo()">Nhấn cái!</button>
  `,
})
export class HelloComponent {
  user = {
    name: "Thanh Le",
    age: 24,
  };

  showInfo() {
    alert("Bắt sự kiện onClick thành công!");
  }
}
