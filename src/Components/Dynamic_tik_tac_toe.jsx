import React, { useEffect, useState } from 'react'
import "./Dynamic_tik_tac_toe.css"
import Swal from 'sweetalert2'

const Dynamic_tik_tac_toe = () => {
    const blank1 = [{id : 1 , value : '' , click : true},{id : 2 , value : '' , click : true},{id : 3 , value : '' , click : true},{id : 4 , value : '' , click : true},{id : 5 , value : '' , click : true},{id : 6 , value : '' , click : true},{id : 7 , value : '' , click : true},{id : 8 , value : '' , click : true},{id : 9 , value : '' , click : true}]
    const blank2 = [{id : 1 , value : '' , click : true},{id : 2 , value : '' , click : true},{id : 3 , value : '' , click : true},{id : 4 , value : '' , click : true},{id : 5 , value : '' , click : true},{id : 6 , value : '' , click : true},{id : 7 , value : '' , click : true},{id : 8 , value : '' , click : true},{id : 9 , value : '' , click : true},{id : 10 , value : '' , click : true},{id : 11 , value : '' , click : true},{id : 12 , value : '' , click : true},{id : 13 , value : '' , click : true},{id : 14 , value : '' , click : true},{id : 15 , value : '' , click : true},{id : 16 , value : '' , click : true}]
    const blank3 = [{id : 1 , value : '' , click : true},{id : 2 , value : '' , click : true},{id : 3 , value : '' , click : true},{id : 4 , value : '' , click : true},{id : 5 , value : '' , click : true},{id : 6 , value : '' , click : true},{id : 7 , value : '' , click : true},{id : 8 , value : '' , click : true},{id : 9 , value : '' , click : true},{id : 10 , value : '' , click : true},{id : 11 , value : '' , click : true},{id : 12 , value : '' , click : true},{id : 13 , value : '' , click : true},{id : 14 , value : '' , click : true},{id : 15 , value : '' , click : true},{id : 16 , value : '' , click : true},{id : 17 , value : '' , click : true},{id : 18 , value : '' , click : true},{id : 19 , value : '' , click : true},{id : 20 , value : '' , click : true},{id : 21 , value : '' , click : true},{id : 22 , value : '' , click : true},{id : 23 , value : '' , click : true},{id : 24 , value : '' , click : true},{id : 25 , value : '' , click : true}]
    const blank4 = [{id : 1 , value : '' , click : true},{id : 2 , value : '' , click : true},{id : 3 , value : '' , click : true},{id : 4 , value : '' , click : true},{id : 5 , value : '' , click : true},{id : 6 , value : '' , click : true},{id : 7 , value : '' , click : true},{id : 8 , value : '' , click : true},{id : 9 , value : '' , click : true},{id : 10 , value : '' , click : true},{id : 11 , value : '' , click : true},{id : 12 , value : '' , click : true},{id : 13 , value : '' , click : true},{id : 14 , value : '' , click : true},{id : 15 , value : '' , click : true},{id : 16 , value : '' , click : true},{id : 17 , value : '' , click : true},{id : 18 , value : '' , click : true},{id : 19 , value : '' , click : true},{id : 20 , value : '' , click : true},{id : 21 , value : '' , click : true},{id : 22 , value : '' , click : true},{id : 23 , value : '' , click : true},{id : 24 , value : '' , click : true},{id : 25 , value : '' , click : true},{id : 26 , value : '' , click : true},{id : 27 , value : '' , click : true},{id : 28 , value : '' , click : true},{id : 29 , value : '' , click : true},{id : 30 , value : '' , click : true},{id : 31 , value : '' , click : true},{id : 32 , value : '' , click : true},{id : 33 , value : '' , click : true},{id : 34 , value : '' , click : true},{id : 35 , value : '' , click : true},{id : 36 , value : '' , click : true}]
    const [blankary, setblankary] = useState([])
    const [ary, setary] = useState([])
    const [count, setcount] = useState(0)
    const [winner, setwinner] = useState('')
    const [value, setvalue] = useState('')
    const [rowValue, setrowValue] = useState(0)
    const [lines, setlines] = useState([])
    
    useEffect(() => {
      setary([...blankary])
    }, [rowValue])

    const createData = () => {
        if(rowValue == 0){
            if(value >=3 && value <=7){
                for(let i=0;i<value*value;i++){
                    let c1 = i + 1
                    let obj = {id : c1 , value : '' , click : true}
                    blankary.push(obj)
                }
                let aa = []
                let n = Number(value)
                for(let i=0;i<(n*n);i++){
                  if(aa[aa.length - 1]?.length<n){
                    aa[aa.length - 1].push(i)
                  }
                  else{
                    aa.push([i])
                  }
                }
                for(let i=0;i<n;i++){
                  let b = i;
                  for(let j=0;j<n;j++){
                    if(aa[aa.length - 1]?.length<n){
                      aa[aa.length - 1].push(b+=n)
                    }
                    else{
                      aa.push([i])
                    }
                  }
                }
                for(let i=0;i<1;i++){
                  let b = i;
                  for(let j=0;j<n;j++){
                    if(aa[aa.length - 1]?.length<n){
                      aa[aa.length - 1].push(b+=(n+1))
                    }
                    else{
                      aa.push([i])
                    }
                  }
                }
                for(let i=n-1;i>n-2;i--){
                  let b = i;
                  for(let j=0;j<n;j++){
                    if(aa[aa.length - 1]?.length<n){
                      aa[aa.length - 1].push(b+=(n-1))
                    }
                    else{
                      aa.push([i])
                    }
                  }
                }
                setlines([...aa])
                setrowValue(value)
                setvalue('')
            }
            else if(value == ""){ alert('Please Enter Value') }
            else{ alert('Plaese Enter Value Between 3 to 5') }
        }
        else{ alert('Please Click on Reset Button') }
        setblankary([...blankary])
    }
  
    const insert = (x) => {
      if(x.click == true && winner == ""){
        let c1 = count + 1
        setcount(c1)
        let copyary = [...ary]
        let obj = copyary?.find(e => e.id == x.id)
        obj.rendom = c1;
        obj.rendom % 2 == 0 ? obj.value = "O" : obj.value = "X"
        obj.click = false
        let newary = copyary.map(x => x.id == obj.id ? x = obj : x)
        setary([...newary])
        let n = Number(rowValue)
        let aaa = []

        for(let i=0;i<lines.length;i++){
          // if(ary.length == 9 && (ary[lines[i][0]]?.value && ary[lines[i][0]]?.value == ary[lines[i][1]]?.value && ary[lines[i][0]]?.value == ary[lines[i][2]]?.value)){
          //   setwinner(`${ary[lines[i][0]].value} is Winner`)
          // }
          // else if(ary.length == 16 && (ary[lines[i][0]]?.value && ary[lines[i][0]]?.value == ary[lines[i][1]]?.value && ary[lines[i][0]]?.value == ary[lines[i][2]]?.value && ary[lines[i][0]]?.value == ary[lines[i][3]]?.value)){
          //   setwinner(`${ary[lines[i][0]].value} is Winner`)
          // }
          // else if(ary.length == 25 && (ary[lines[i][0]]?.value && ary[lines[i][0]]?.value == ary[lines[i][1]]?.value && ary[lines[i][0]]?.value == ary[lines[i][2]]?.value && ary[lines[i][0]]?.value == ary[lines[i][3]]?.value && ary[lines[i][0]]?.value == ary[lines[i][4]]?.value)){
          //   setwinner(`${ary[lines[i][0]].value} is Winner`)
          // }
          // else if(ary.length == 36 && (ary[lines[i][0]]?.value && ary[lines[i][0]]?.value == ary[lines[i][1]]?.value && ary[lines[i][0]]?.value == ary[lines[i][2]]?.value && ary[lines[i][0]]?.value == ary[lines[i][3]]?.value && ary[lines[i][0]]?.value == ary[lines[i][4]]?.value && ary[lines[i][0]]?.value == ary[lines[i][5]]?.value)){
          //   setwinner(`${ary[lines[i][0]].value} is Winner`)
          // }
          for(let j=0;j<lines[i].length;j++){
            if(ary[lines[i][0]].value == ary[lines[i][j]].value){
              aaa.push(true)
            }
          } 
        }
        console.log(lines)
        console.log(ary)
        console.log(aaa , 'aaaa')

        // for(let i=0;i<ary.length;i+=n){
        //   if(ary.length == 9 && (ary[i]?.value == ary[i+1]?.value && ary[i]?.value == ary[i+2]?.value && ary[i]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        //   else if(ary.length == 16 && (ary[i]?.value == ary[i+1]?.value && ary[i]?.value == ary[i+2]?.value && ary[i]?.value == ary[i+3]?.value && ary[i]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        //   else if(ary.length == 25 && (ary[i]?.value == ary[i+1]?.value && ary[i]?.value == ary[i+2]?.value && ary[i]?.value == ary[i+3]?.value && ary[i]?.value == ary[i+4]?.value && ary[i]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        // }

        // for(let i=0;i<n;i++){
        //   if(ary.length == 9){
        //     if(ary[i]?.value == ary[i+3]?.value && ary[i]?.value == ary[i+6]?.value && ary[i]?.value != ""){ setwinner(`${ary[i].value} is Winner`) }
        //     else if((ary[i]?.value == ary[i+4]?.value && ary[i]?.value == ary[i+8]?.value && ary[i]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        //     else if((ary[2]?.value == ary[4]?.value && ary[2]?.value == ary[6]?.value && ary[2]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        //   }
        //   else if(ary.length == 16){
        //     if(ary[i]?.value == ary[i+4]?.value && ary[i]?.value == ary[i+8]?.value && ary[i]?.value == ary[i+12]?.value && ary[i]?.value != ""){ setwinner(`${ary[i].value} is Winner`) }
        //     else if((ary[i]?.value == ary[i+5]?.value && ary[i]?.value == ary[i+10]?.value && ary[i]?.value == ary[i+15]?.value && ary[i]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        //     else if((ary[3]?.value == ary[6]?.value && ary[3]?.value == ary[9]?.value && ary[3]?.value == ary[12]?.value && ary[3]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        //   }
        //   else{
        //     if(ary[i]?.value == ary[i+5]?.value && ary[i]?.value == ary[i+10]?.value && ary[i]?.value == ary[i+15]?.value && ary[i]?.value == ary[i+20]?.value && ary[i]?.value != ""){ setwinner(`${ary[i].value} is Winner`) }
        //     else if((ary[i]?.value == ary[i+6]?.value && ary[i]?.value == ary[i+12]?.value && ary[i]?.value == ary[i+18]?.value && ary[i]?.value == ary[i+24]?.value && ary[i]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        //     else if((ary[4]?.value == ary[8]?.value && ary[4]?.value == ary[12]?.value && ary[4]?.value == ary[16]?.value && ary[4]?.value == ary[20]?.value && ary[4]?.value != "")){ setwinner(`${ary[i].value} is Winner`) }
        //   }
        // }

        // let cc = 0;
        // ary.forEach((x) => {
        //     if(x.value != ''){
        //         cc++;
        //     }
        // })
        
        // if(cc == rowValue*rowValue){ setwinner('Match Draw') }

      }
    }

    const reset = () => {
        setvalue('')
        setrowValue('')
        setwinner('')
        setcount(0)
        setblankary([...[]])
        setlines([...[]])
    }
  
    const restart = () => {
      setwinner('')
      setcount(0)
      if(ary.length == blank1.length){ setary([...blank1]) }
      else if(ary.length == blank2.length){ setary([...blank2]) }
      else if(ary.length == blank3.length){ setary([...blank3]) }
      else{ setary([...blank4]) }
    }
  
    if(winner != ""){Swal.fire(winner)}
  
    return (
      <>
          <div className='container d-flex justify-content-center flex-wrap'>
            <div className='w-100 text-center mb-3'>
                <form>
                    <input type="number" placeholder='Please Enter Value' value={value} onChange={(e) => setvalue(e.target.value)} className='ps-2'/>
                    <button type='button' className='btn btn-success ms-2 me-2' onClick={createData}>Click</button>
                    {
                        rowValue != "" ? <button type='button' className='btn btn-danger' onClick={reset}>Reset</button> : <></>
                    }
                </form>
            </div>
            <div className={`${rowValue == 3 || rowValue == 4 ? 'w-50' : 'w-75'} bg-dark`}>
              <div className={`row row-cols-${rowValue} g-0`}>
                {
                  ary?.map((x,i) => <div style={x.click == true ? {cursor : 'pointer'} : {}} onClick={() => insert(x)} className={`col coldiv`} key={i}>{x.value}</div> )
                }
              </div>
              <div className='text-white text-center'>
                {winner}
              </div>
            </div>
            {
                rowValue != "" ? <div className='text-center w-100 pt-3'>
                <button className='btn btn-warning' onClick={restart}>Restart Game</button>
              </div> : <></>
            }
          </div>
      </>
  )
}

export default Dynamic_tik_tac_toe