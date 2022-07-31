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
        };
    },
    
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        },
    },

    methods: {
        attackMonster() {
            const attackMonster = getRandomValue(12, 5);
            this.monsterHealth -= attackMonster;
            this.attackPlayer();
        },

        attackPlayer() {
            const attackPlayer = getRandomValue(15, 8);
            this.playerHealth -= attackPlayer;
        },
    },
});

app.mount("#game");