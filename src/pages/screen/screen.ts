import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var window;

@Component({
  selector: 'page-screen',
  templateUrl: 'screen.html',
})
export class ScreenPage implements OnInit {

  counter: number = 1;
  answer = 0;
  showAnswer = false;
  result = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenPage');
  }

  ngOnInit() {

  }

  back() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  next() {
    if (this.counter < 13) {
      this.counter += 1;
    }
  }

  process() {
    if (this.counter < 14) {
      this.counter += 1;
    }
  }

  selectedAnswer(item) {

    this.result = this.result.filter(i => i.id != this.counter);

    if (this.counter == 1) {
      this.result.push({ id: this.counter, question: 'แขน ขา อ่อนแรง', answer: item });
    } else if (this.counter == 2) {
      this.result.push({ id: this.counter, question: 'แขน ขา ชา', answer: item });
    } else if (this.counter == 3) {
      this.result.push({ id: this.counter, question: 'หน้าเบี้ยว', answer: item });
    } else if (this.counter == 4) {
      this.result.push({ id: this.counter, question: 'เดินเซ', answer: item });
    } else if (this.counter == 5) {
      this.result.push({ id: this.counter, question: 'การพูด', answer: item });
    } else if (this.counter == 6) {
      this.result.push({ id: this.counter, question: 'การมองเห็น', answer: item });
    } else if (this.counter == 7) {
      this.result.push({ id: this.counter, question: 'ง่วงซึม', answer: item });
    } else if (this.counter == 8) {
      this.result.push({ id: this.counter, question: 'ปวดหัว', answer: item });
    } else if (this.counter == 9) {
      this.result.push({ id: this.counter, question: 'ชัก', answer: item });
    } else if (this.counter == 10) {
      this.result.push({ id: this.counter, question: 'เวียนหัว', answer: item });
    } else if (this.counter == 11) {
      this.result.push({ id: this.counter, question: 'คลื่นไส้ อาเจียน', answer: item });
    } else if (this.counter == 12) {
      this.result.push({ id: this.counter, question: 'สับสน', answer: item });
    } else if (this.counter == 13) {
      this.result.push({ id: this.counter, question: 'ไข้ ตัวร้อน', answer: item });
    }

    

    console.log(this.result);
  }


  reset() {
    this.counter = 1;
    this.answer = 0;
    this.showAnswer = false;
    this.result = [];
  }

  ambulance(passedNumber) {
    window.location = passedNumber;
  }

}