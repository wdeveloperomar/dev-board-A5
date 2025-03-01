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
        
        for (let button of completeButtons) {
            button.addEventListener('click', function () {
                alert('Board updated Succesfully')

                if (convertedCardCounts > 0) {
                    convertedCardCounts -= 1;
                    cardCounts.innerText = convertedCardCounts;
                }
                if (convertedCardCounts === 0) {
                    alert('congrates!!! You have complete all the current task')
                }
                const completeCounts = document.getElementById('task-complete-count');
                let convertedCompleteCounts = parseInt(completeCounts.innerText);
                convertedCompleteCounts += 1;
                completeCounts.innerText = convertedCompleteCounts;
                
                const allTitle = document.querySelectorAll('.title')
                const history = document.getElementById('history');
                const p = document.createElement('p');
                p.classList.add('mt-4', 'p-4', 'shadow-md', 'bg-slate-100');
                for(let title of allTitle) {
                    p.innerText = `${title.innerText} ${new Date().toLocaleTimeString()}`;
                    history.appendChild(p);
                }
                this.setAttribute('disabled', 'true');
                this.classList.remove('bg-blue-500', 'cursor-pointer');
                this.classList.add('bg-gray-400');
            });
            
        }
        
        

