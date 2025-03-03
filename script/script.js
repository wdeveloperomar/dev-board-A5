// change the bg color
const lightColors = ["#FFFAF0", "#F5F5DC", "#E6E6FA", "#FFFACD", "#F0FFF0", "#E0FFFF", "#FAEBD7", 
            "#2C3E50", "#34495E", "#3E2723", "#424242", "#1B2631", "#283747", "#2E4053"];
        let index = 0;


        // current date code
        const now = new Date();

        const day = now.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., "Wed"
        const date = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).replace(',', '');
        const frontDay = document.getElementById('day');
        frontDay.innerText = day;

        const frontDate = document.getElementById('date');
        frontDate.innerText = date;


        // task code
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
                
                const title = this.closest('.card').querySelector('.title');
                const history = document.getElementById('history');
                const p = document.createElement('p');
                p.classList.add('mt-4', 'p-4', 'shadow-md', 'bg-slate-100');
                p.innerText = `You have completed the task ${title.innerText} at ${new Date().toLocaleTimeString()}`;
                history.appendChild(p);

                this.setAttribute('disabled', 'true');
                this.classList.remove('bg-blue-500', 'cursor-pointer');
                this.classList.add('bg-gray-400');
            });
            
        }

        document.getElementById('delete-history').addEventListener('click', function () {
            const history = document.getElementById('history');
            history.innerHTML = '';
        })


        
        

