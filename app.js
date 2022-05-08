function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

const game = () => {
    let playerScore = 0
    let robotScore = 0
    let moves = 0
    
    const playGame = () => {
        const rockBtn = document.querySelector('.rock')
        const paperBtn = document.querySelector('.paper')
        const scissorBtn = document.querySelector('.scissor')
        const playerOptions = [rockBtn,paperBtn,scissorBtn]
        const robotOptions = ['rock','paper','scissor']

        
        playerOptions.forEach(Option => {
            Option.addEventListener('click', function(){
                moves++;
                const choiceNumber = Math.floor(Math.random()*3)
                const robotChoice = robotOptions[choiceNumber]
    
                if(Option == playerOptions[0]) {
                    winner('rock',robotChoice)
                }
                if(Option == playerOptions[1]) {
                    winner('paper',robotChoice)
                }
                if(Option == playerOptions[2]) {
                    winner('scissor',robotChoice)
                }
    
                if(moves == 5) {
                    gameOver(playerOptions)
                }
            })
        })
    }

    var fatherPlayer = document.querySelector('#rps-player')
    this.imagemPlayer = novoElemento('img', 'player-img')
    var fatherRobot = document.querySelector('#rps-robot')
    this.imagemRobot = novoElemento('img', 'robot-img')

    const winner = (player, robot) => {
        const robotWins = document.querySelector('#robot-wins')
        const playerWins = document.querySelector('#player-wins')
        const playerScoreBoard = document.querySelector('.p-score')
        const robotScoreBoard = document.querySelector('.r-score')

        if(player != robot) {
            if (player == 'rock') {
                console.log("teste")
                imagemPlayer.src = 'imgs/rock.png'
                fatherPlayer.appendChild(imagemPlayer)
                if (robot == 'paper') {
                    imagemRobot.src = 'imgs/paper.png'
                    fatherRobot.appendChild(imagemRobot)
                    robotWins.textContent = 'Robô venceu'
                    playerWins.textContent = ' '
                    robotScore++
                    robotScoreBoard.textContent = robotScore
                } else {
                    imagemRobot.src = 'imgs/scissor.png'
                    fatherRobot.appendChild(imagemRobot)
                    playerWins.textContent = 'Você venceu'
                    robotWins.textContent = ' '
                    playerScore++
                    playerScoreBoard.textContent = playerScore
                }       
            }
            if (player == 'paper') {
                imagemPlayer.src = 'imgs/paper.png'
                fatherPlayer.appendChild(imagemPlayer)
                if (robot == 'scissor') {
                    imagemRobot.src = 'imgs/scissor.png'
                    fatherRobot.appendChild(imagemRobot)
                    robotWins.textContent = 'Robô venceu'
                    playerWins.textContent = ' '
                    robotScore++
                    robotScoreBoard.textContent = robotScore
                } else {
                    imagemRobot.src = 'imgs/rock.png'
                    fatherRobot.appendChild(imagemRobot)
                    playerWins.textContent = 'Você venceu'
                    robotWins.textContent = ' '
                    playerScore++
                    playerScoreBoard.textContent = playerScore
                }       
            }
            if (player == 'scissor') {
                imagemPlayer.src = 'imgs/scissor.png'
                fatherPlayer.appendChild(imagemPlayer)
                if (robot == 'rock') {
                    imagemRobot.src = 'imgs/rock.png'
                    fatherRobot.appendChild(imagemRobot)
                    robotWins.textContent = 'Robô venceu'
                    playerWins.textContent = ' '
                    robotScore++
                    robotScoreBoard.textContent = robotScore
                } else {
                    imagemRobot.src = 'imgs/paper.png'
                    fatherRobot.appendChild(imagemRobot)
                    playerWins.textContent = 'Você venceu'
                    robotWins.textContent = ' '
                    playerScore++
                    playerScoreBoard.textContent = playerScore
                }       
            }
        } else {
            moves--
            if(player == 'paper') {
                playerWins.textContent = 'Empate'
                robotWins.textContent = ' '
                imagemPlayer.src = 'imgs/paper.png'
                fatherPlayer.appendChild(imagemPlayer)
                imagemRobot.src = 'imgs/paper.png'
                fatherRobot.appendChild(imagemRobot)
            }
            if(player == 'rock') {
                playerWins.textContent = 'Empate'
                robotWins.textContent = ' '
                imagemPlayer.src = 'imgs/rock.png'
                fatherPlayer.appendChild(imagemPlayer)
                imagemRobot.src = 'imgs/rock.png'
                fatherRobot.appendChild(imagemRobot)
            }
            if(player == 'scissor') {
                playerWins.textContent = 'Empate'
                robotWins.textContent = ' '
                imagemPlayer.src = 'imgs/scissor.png'
                fatherPlayer.appendChild(imagemPlayer)
                imagemRobot.src = 'imgs/scissor.png'
                fatherRobot.appendChild(imagemRobot)
            }
        }
    }

    const gameOver = (playerOptions) => {
        
        const result = document.querySelector('.winner')
        const reloadBtn = document.querySelector('.reload')
        const gameOver = document.querySelector('.option')
        const robotWins = document.querySelector('#robot-wins')
        const playerWins = document.querySelector('#player-wins')
        const robotProfile = document.querySelector('#r-profile')
        const playerProfile = document.querySelector('#p-profile')

        playerOptions.forEach(option => { 
            option.style.display = 'none';
        })

        result.style.display = 'inline'
        reloadBtn.style.display = 'inline'
        gameOver.innerText = 'Fim de jogo'
        imagemPlayer.style.display = 'none'
        imagemRobot.style.display = 'none'
        robotWins.textContent = ' '
        playerWins.textContent = ' '
        
        if (playerScore > robotScore) {
            result.innerText = "Você venceu!"
            robotProfile.style.opacity = '0.5'
        } 
        if (playerScore < robotScore) {
            result.innerText = "Você perdeu!"
            playerProfile.style.opacity = '0.5'
        }

        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    playGame();
}

game();