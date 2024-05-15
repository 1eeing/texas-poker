const createNewGame = () => {
    const pai = ['2','3','4','5','6','7','8','9','10','J', 'Q', 'K', 'A'];
    const naipe = ['♠', '♣', '♦', '♥'];
    const total = naipe.map(item => pai.map(j => `${item}${j}`)).flat();
    
    const randomCard = () => {
        const card = total[Math.floor(Math.random() * total.length)];
        return card;
    }
    
    const choseOneCard = () => {
        const card = randomCard();
        total.splice(total.indexOf(card), 1);
        return card;
    }
    
    const chosePrivateCard = () => {
        return [choseOneCard(), choseOneCard()];
    }
    
    const chosePublicCard = (turn) => {
        if (turn === 1) {
            return [choseOneCard(), choseOneCard(), choseOneCard()];
        }
        if (turn === 2) {
            return [choseOneCard()];
        }
        if (turn === 3) {
            return [choseOneCard()];
        }
        throw new Error('Invalid turn');
    }

    return {
        chosePrivateCard,
        chosePublicCard,
    }
}