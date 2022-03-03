const app =  Vue.createApp({
    data(){
        return {
            title : "--Vue Bootcamp--" ,
            description : "Açıklama",
            eduflow: {
                title: "Osman Kutlu'nun İnstagram Adresine gitmek için tıklayınız.",
                target: "_blank",
                url: "https://www.instagram.com/osmankutlv/",
                alt: "osman ig",

            },
            owner:  "Pogaca,",
            coords : {
                x: 0,
                y: 0,
            },
        }
        
        
    },
    methods : {
        changeTitle(pTitle){
            
            this.title = pTitle;
            
        },
        updateCoords(message, event){
            //console.log(message, event.x, event.y);
            // this.coords=event;
            this.changeTitle(`${event.x},${event.y}`);
            this.coords = {
                
                x: event.x,
                y: event.y
            }
            //console.log(event);

        }
    },
}).mount("#app")