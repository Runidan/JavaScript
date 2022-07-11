/*
4. Система продажи билетов 

Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
ticketWindow.buyTicket('Concert') 
 Добавляем сумму за билет в кассу, возвращаем
случайный шестизначный ID билета, создать ID можно любым способом 

ticketWindow.returnTicket('123456') 
 Возвращаем билет, если в системе такой id записан
как проданный, он должен быть удален из списка проданных и из кассы должна быть
вычтена соответствующая его цене сумма 
*/

function TicketOffice() {

  this.concerts = new Map();
  this.salledTicket = new Map();
  this.cashBox = 0;

  this.createEvent = function(concertName, price){
    this.concerts.set(concertName, Number(price));
  }

  this.buyTicket = function(concertName){
    if (this.concerts.has(concertName)) {
      this.cashBox += this.concerts.get(concertName);
      let ticketID = 0;
      do { ticketID = Math.floor(Math.random() * 899999) + 100000 } while (this.salledTicket.has(ticketID));
      this.salledTicket.set(ticketID, concertName);
      return ticketID;
    }
  }

  this.returnTicket = function(tickerID){
    tickerID = Number(tickerID);
    if (this.salledTicket.has(tickerID)){
      let concert = this.salledTicket.get(tickerID);
      let price = this.concerts.get(concert);
      this.salledTicket.delete(tickerID);
      this.cashBox -= price;
    }
  }

}

// let ticketWindow = new TicketOffice();
// ticketWindow.createEvent('Concert', 500);
// console.log(ticketWindow.salledTicket);
// console.log(ticketWindow.cashBox);
// let ticket1 = ticketWindow.buyTicket('Concert');
// console.log(ticketWindow.salledTicket);
// console.log(ticketWindow.cashBox);

// ticketWindow.returnTicket(ticket1);
// console.log(ticketWindow.cashBox);

