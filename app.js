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
            winner: null,
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

    watch : {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = "draw";
            } else if(value <= 0) {
                this.winner = "monster";
            }
        },

        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = "draw";
            } else if(value <= 0) {
                this.winner = "player";
            }
        },
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