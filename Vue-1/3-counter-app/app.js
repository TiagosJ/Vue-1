const  app = Vue.createApp({
    data  ()  {
        return {
            counter : 0,
            counter2 : 0,
        };
    },
    methods : {
        // inc(){
        //    return this.counter++;
        // },
        // dec(){
        //     this.counter--;
        // },
        
       
    },
    computed :  {
        getCounterResult(){
            console.log("Counter 1 çalıştı")
            return this.counter >  5 ? 'büyük' : 'küçük'
        },
        getCounter2Result(){
            console.log("Counter 2 çalıştı")
            return this.counter2 >  5 ? 'büyük' : 'küçük'
        },
        
            
    },
    watch: {
        counter(newValue,oldValue){
            console.log("counter",oldValue,"->",newValue);
        },
        getCounterResult(newValue,oldValue){
            console.log("result",oldValue,"->",newValue)
            
        },
        
    }
}).mount("#app");