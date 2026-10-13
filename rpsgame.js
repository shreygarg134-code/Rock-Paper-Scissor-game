        let score =JSON.parse(localStorage.getItem('score'))||{
                Wins: 0,
                Loss: 0,
                Tie: 0
        };
        updateScoreElement();
        // if(score===null){
        //     score={
        //         Wins: 0,
        //         Loss: 0,
        //         Tie: 0
        //     };
        // }
        function playGame(playerMove){
            const compMove=pickComputerMove();
            let result= '';
            if(playerMove==='Scissors'){
                if(compMove==='Rock'){
                    result='You Lose';
                }else if(compMove==='Paper'){
                    result='You Win';
                }else if(compMove==='Scissors'){
                    result='Tie';
                }
                
            }else if(playerMove==='Paper'){
                if(compMove==='Rock'){
                    result='You Win';
                }else if(compMove==='Paper'){
                    result='Tie';
                }else if(compMove==='Scissors'){
                    result='You Lose';
                }
                
            }else if(playerMove==='Rock'){
                if(compMove==='Rock'){
                    result='Tie';
                }else if(compMove==='Paper'){
                    result='You Lose';
                }else if(compMove==='Scissors'){
                    result='You Win';
                }
            }
            if(result==='You Win'){
                score.Wins +=1;
            }else if(result==='You Lose'){
                score.Loss +=1;
            }else if(result==='Tie'){
                score.Tie+=1;
            }


            
            localStorage.setItem('score',JSON.stringify(score))

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML =`
        you
        <img class="move-icon" src="${playerMove}.png" alt="" >|
        <img class="move-icon" src="${compMove}.png" alt="" >
        Computer`;
            
        }

        function updateScoreElement(){
            document.querySelector('.js-score')
            .innerHTML=`Wins: ${score.Wins}, losses: ${score.Loss} , Tie: ${score.Tie}` 
        }
        function resetScore(){
            score.Wins=0;
            score.Loss=0;
            score.Tie=0;
            localStorage.removeItem('score');
            updateScoreElement();
        }

        function pickComputerMove(){
            const randomNumber=Math.random();
            let compMove ='';
            if(randomNumber>=0 && randomNumber<1/3){
                compMove='Rock';
                
            }else if(randomNumber>=1/3 && randomNumber<2/3){
                compMove='Paper';
            
            }else if(randomNumber>=2/3 && randomNumber<1){
                compMove='Scissors';
            
            }
            return compMove;
        }