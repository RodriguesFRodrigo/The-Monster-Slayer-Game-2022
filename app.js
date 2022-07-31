// JS
function getRandomValue(maxValue, mimValue) {
    return Math.floor((Math.random() * (maxValue - mimValue)) + mimValue);
}

// Vue
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        },
        myUserSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },

    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },

        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
        },

        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },

        healPlayer() {
            this.currentRound++;
            const healPlayer = getRandomValue(20, 8);
            if(this.playerHealth + healPlayer > 100) {
                this.playerHealth = 100;
            }else {
                this.playerHealth += healPlayer;
            }
            this.attackPlayer();
        },
    },
});

app.mount("#game");