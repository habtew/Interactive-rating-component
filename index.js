const ratings = Array.from(document.querySelectorAll('.ratings span'))
const btn = document.querySelector('#btn')
const main = document.querySelector('main')
let rate = 0
ratings.forEach(element => {
    element.addEventListener('click', function(event){
        rate = event.target.innerText
        
    })
});

btn.addEventListener('click', function(){
    main.innerHTML = `
        <div class="container thanks-container">
            <img src="./images/illustration-thank-you.svg" alt="illustration thank you" />
            <p class="selected-number">You selected ${rate} out of 5</p>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div> 
    `
})