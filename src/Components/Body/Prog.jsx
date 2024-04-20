import React from 'react'

const Prog = (props) => {
  return (
    <div className="firt_col_progs">
            <div>
              <div  style={{width:`${props.span1}%`}} className="labels_1 label"> <h5>{props.div1h5}</h5> <span> {`${props.span1}%`} </span> </div>
              <progress id="file" value={`${props.span1}`} max="100"> 32% </progress>
            </div>
            <div>
              <div style={{width:`${props.span2}%`}} className="labels_2 label"> <h5>{props.div2h5}</h5> <span> {`${props.span2}%`} </span> </div>
              <progress id="file" value={`${props.span2}`} max="100"> 32% </progress>
            </div>
            <div>
              <div style={{width:`${props.span3}%`}} className="labels_3 label"> <h5>{props.div3h5}</h5> <span> {`${props.span3}%`} </span> </div>
              <progress id="file" value={`${props.span3}`} max="100"> 32% </progress>
            </div>
          </div>
  )
}

export default Prog