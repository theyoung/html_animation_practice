export default class Canvas extends HTMLElement {
    constructor()  {
        super();
        this.render();
        // this.draw();
    }  

    render() {
        return this.innerHTML = `
            <canvas></canvas>
            ${this.getStyle()}
        `;
    }

    getStyle(){
        return `
        <style type="text/css">
            app-main {
                display:flex;
                flex-direction:column;
                align-items: center;
                justify-content: center;    
                position: fixed;
                top:0;
                left:0;
                bottom:0;
                right:0;
                width: 100%;
                height: 100%;
            }

            canvas {
                position: absolute;
                margin: 1vh 1vw 1vh 1vw;
                width:90vw;
                height:90vh;
            }
        </style>
        
        `
    }

    draw(){
        console.log('draw');
        for(let i = 0; i <= 2 * Math.PI; i += 0.02){
            let x = i * 30;
            let y = Math.sin(i) * 30;
            this.ctx.fillRect(x,y,5,5);
            console.log(x,y);
        }
    }

    connectedCallback() {
        console.log('connected Callback');
        this.canvas= this.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.translate(0,this.canvas.height/2);
        this.ctx.scale(1,-1);
        this.canvas.style.border = '1px solid black';
        this.draw();
    }

    disconnectCallback() {

    }
};

// window.addEventListener("load", function (e) {
//     this.document.querySelector('app-main').draw();
// });
customElements.get('app-main')?? customElements.define('app-main', Canvas);





