import React, { Fragment, Component } from 'react';

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){ 
    // Box width
    let bw = 800;
    // Box height
    let bh = 800;
    // Padding
    let p = 10;
    
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    
    function drawBoard(){
        for (let x = 0; x <= bw; x += 40) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }
    
        for (let x = 0; x <= bh; x += 40) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }
        context.strokeStyle = "blue";
        context.stroke();
    }
    let grid = drawBoard();
    return(
      <Fragment>
       {/* doesnt do anything */}
       {grid}  
      </Fragment>
     
    );
  }
}
  
export default Canvas;
