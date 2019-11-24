var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
let thumbDown = document.getElementsByClassName("fa-thumbs-down")
let coffeeDone = document.getElementsByClassName("fa-edit") 

Array.from(coffeeDone).forEach(function(element) {
      element.addEventListener('click', function(){
        const  cust = this.parentNode.parentNode.childNodes[3].innerText
        const order = this.parentNode.parentNode.childNodes[7].innerText
        fetch('coffeePlace', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'cust':cust,
            'order':order,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const cust = this.parentNode.parentNode.childNodes[3].innerText
        console.log('cust', cust)
        const order = this.parentNode.parentNode.childNodes[7].innerText
        console.log('order',order)
        fetch('coffeePlace', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'cust': cust,
            'order': order
            })
        }).then(function (response) {
          window.location.reload()
        })
      });
});