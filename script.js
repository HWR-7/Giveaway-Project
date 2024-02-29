 // Set the date we're counting down to
 const giveawayDate = new Date('2024-03-08').getTime();

 // Update the countdown every 1 second
 const countdown = setInterval(() => {
   // Get today's date and time
   const now = new Date().getTime();
   
   // Calculate the distance between now and the giveaway date
   const distance = giveawayDate - now;
   
   // Calculate days, hours, minutes and seconds
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
   // Display the result in the element with id="countdown"
  //  document.getElementById('countdown').innerHTML = `Giveaway ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
   document.getElementById('days').innerHTML = `${days}`;
   document.getElementById('hours').innerHTML = `${hours}`;
   document.getElementById('minutes').innerHTML = `${minutes}`;
   document.getElementById('seconds').innerHTML = `${seconds}`;
   // If the countdown is over, display a message
   if (distance < 100000000) {
     clearInterval(countdown);
     document.getElementById('countdown').innerHTML = 'The giveaway has ended!';
   }
 }, 1000);