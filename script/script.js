// change the bg color
const lightColors = ["#FFFAF0", "#F5F5DC", "#E6E6FA", "#FFFACD", "#F0FFF0", "#E0FFFF", "#FAEBD7", 
            "#2C3E50", "#34495E", "#3E2723", "#424242", "#1B2631", "#283747", "#2E4053"];
        let index = 0;

        document.getElementById("colorBtn").addEventListener("click", function() {
            document.body.style.backgroundColor = lightColors[index];
            index = (index + 1) % lightColors.length;
        });

        const cards = document.getElementsByClassName('card');
        const cardCounts = document.getElementById('card-counts');
        cardCounts.innerText = cards.length;
        
        let convertedCardCounts = parseInt(cardCounts.innerText);
        const completeButtons = document.querySelectorAll('.complete-button');
        
        console.log(completeButtons);
        
        for (let button of completeButtons) {
            button.addEventListener('click', function() {
                if (convertedCardCounts > 0) {
                    convertedCardCounts -= 1; 
                    cardCounts.innerText = convertedCardCounts;
                }
            });
        }
        

