import React, { useEffect, useState } from 'react'
import "./tic_tac_toe.css"
import Swal from 'sweetalert2'

const Tic_tac_toe = () => {
  const blanckary = [{id : 1 , value : '' , click : true , style : false},{id : 2 , value : '' , click : true , style : false},{id : 3 , value : '' , click : true , style : false},{id : 4 , value : '' , click : true , style : false},{id : 5 , value : '' , click : true , style : false},{id : 6 , value : '' , click : true , style : false},{id : 7 , value : '' , click : true , style : false},{id : 8 , value : '' , click : true , style : false},{id : 9 , value : '' , click : true , style : false}]
  const [ary, setary] = useState([...blanckary])
  const [count, setcount] = useState(0)
  const [winner, setwinner] = useState('')
  const [style, setstyle] = useState('')

  const insert = (x) => {
    if(x.click == true && winner == ""){
      let c1 = count + 1
      setcount(c1)
      let obj = ary?.find(e => e.id == x.id)
      obj.rendom = c1;
      obj.rendom % 2 == 0 ? obj.value = "O" : obj.value = "X"
      obj.click = false
      let newary = ary.map(x => x.id == obj.id ? x = obj : x)
      setary([...newary])

      for(let i=0;i<ary.length;i+=3){
        if(ary[i]?.value == ary[i+1]?.value && ary[i]?.value == ary[i+2]?.value && ary[i]?.value != ""){
          ary[i].style = true;
          ary[i+1].style = true;
          ary[i+2].style = true;
          setstyle('winnerStyle3')
          setwinner(`${ary[i].value} is Winner`)
        }
      }
      for(let i=0;i<3;i++){
        if(ary[i]?.value == ary[i+3]?.value && ary[i]?.value == ary[i+6]?.value && ary[i]?.value != ""){
          ary[i].style = true;
          ary[i+3].style = true;
          ary[i+6].style = true;
          setstyle('winnerStyle4')
          setwinner(`${ary[i].value} is Winner`)
        }
        else if((ary[i]?.value == ary[i+4]?.value && ary[i]?.value == ary[i+8]?.value && ary[i]?.value != "")){
          ary[i].style = true;
          ary[i+4].style = true;
          ary[i+8].style = true;
          setstyle('winnerStyle1')
          setwinner(`${ary[i].value} is Winner`)
        }
        else if((ary[2]?.value == ary[4]?.value && ary[2]?.value == ary[6]?.value && ary[2]?.value != "")){
          ary[2].style = true;
          ary[6].style = true;
          ary[4].style = true;
          setstyle('winnerStyle2')
          setwinner(`${ary[i].value} is Winner`)
        }
      }
    }
  }

  const reset = () => {
    setstyle('')
    setwinner('')
    setcount(0)
    setary([...blanckary])
  }

  if(winner != ""){Swal.fire(winner)}

  return (
    <>
        <div className='container d-flex justify-content-center flex-wrap'>
          <div className='w-50 border bg-dark'>
            <div className='row row-cols-3 g-0'>
              {
                ary.map((x,i) => <div style={x.click == true ? {cursor : 'pointer'} : {}} onClick={() => insert(x)} className={`col coldiv ${x.style == true ? style : ''}`} key={i}>{x.value}</div> )
              }
            </div>
            <div className='text-white text-center'>
              {winner}
            </div>
          </div>
            <div className='text-center w-100 pt-3'>
              <button className='btn btn-warning' onClick={reset}>Reset</button>
            </div>
        </div>
    </>
  )
}

export default Tic_tac_toe