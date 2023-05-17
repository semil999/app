import React, { useEffect, useState } from 'react'
import "./DynamicTikTacToe.css"
import Swal from 'sweetalert2'

const DynamicTikTacToe = () => {
    const [blankArray, setblankArray] = useState([])
    const [tableArray, settableArray] = useState([])
    const [count, setcount] = useState(0)
    const [winner, setwinner] = useState('')
    const [userEnterValue, setuserEnterValue] = useState('')
    const [rowValue, setrowValue] = useState(0)
    const [lines, setlines] = useState([])
    
    useEffect(() => {
      settableArray([...blankArray])
    }, [rowValue])

    //user enter value and create array
    const createData = () => {
        if(rowValue == 0){
            if(userEnterValue >=3 && userEnterValue <=10){
                for(let i=0;i<userEnterValue*userEnterValue;i++){
                    let incrementId = i + 1
                    let obj = {id : incrementId , value : '' , click : true}
                    blankArray.push(obj)
                }

                let positionsAry = []
                let totalValue = Number(userEnterValue)
                //row lines logic
                for(let i=0;i<(totalValue*totalValue);i++){
                  if(positionsAry[positionsAry.length - 1]?.length<totalValue){
                    positionsAry[positionsAry.length - 1].push(i)
                  }
                  else{
                    positionsAry.push([i])
                  }
                }
                //column lines logic
                for(let i=0;i<totalValue;i++){
                  let indexCopy = i;
                  for(let j=0;j<totalValue;j++){
                    if(positionsAry[positionsAry.length - 1]?.length<totalValue){
                      positionsAry[positionsAry.length - 1].push(indexCopy+=totalValue)
                    }
                    else{
                      positionsAry.push([i])
                    }
                  }
                }
                //left to right cross line logic
                  let firstIndex = 0
                  for(let j=0;j<totalValue;j++){
                    if(positionsAry[positionsAry.length - 1]?.length<totalValue){
                      positionsAry[positionsAry.length - 1].push(firstIndex+=(totalValue+1))
                    }
                    else{
                      positionsAry.push([firstIndex])
                    }
                  }
                //right to left cross line logic
                  let lastIndex = totalValue-1
                  for(let j=0;j<totalValue;j++){
                    if(positionsAry[positionsAry.length - 1]?.length<totalValue){
                      positionsAry[positionsAry.length - 1].push(lastIndex+=(totalValue-1))
                    }
                    else{
                      positionsAry.push([lastIndex])
                    }
                  }
                setlines([...positionsAry])
                setrowValue(userEnterValue)
                setuserEnterValue('')
                setblankArray([...blankArray])
            }
            else if(userEnterValue == ""){ alert('Please Enter Value') }
            else{ alert('Plaese Enter Value Between 3 to 5') }
        }
        else{ alert('Please Click on Restart Game') }
    }
  
    //data insert in box
    const insert = (x) => {
      if(x.click == true && winner == ""){
        let countIncrement = count + 1
        setcount(countIncrement)
        let copyTableArray = [...tableArray]
        let obj = copyTableArray?.find(e => e.id == x.id)
        obj.rendom = countIncrement;
        obj.rendom % 2 == 0 ? obj.value = "O" : obj.value = "X"
        obj.click = false
        let newArray = copyTableArray.map(x => x.id == obj.id ? x = obj : x)
        settableArray([...newArray])
        let totalValue = Number(rowValue)

        //Winner Logic
        for(let i=0;i<lines.length;i++){
          let aryCount = 0;
          tableArray.forEach((x) => {
              if(x.value != ''){
                  aryCount++;
              }
          })

          lines.forEach((singleLine) => {
            const isMatched = singleLine.map((indexValue) => tableArray[singleLine[0]].value != "" && tableArray[singleLine[0]].value == tableArray[indexValue].value ? true : false)
            
            let matchAll = isMatched.every(x => x == true)
            if(matchAll == true){
              setwinner(`${tableArray[singleLine[0]].value} is Winner`)
            }
            else if(aryCount == (totalValue*totalValue) && matchAll == false){
              setwinner('Match Draw')
            }
          });
        }
      }
    }

    const restart = () => {
      setuserEnterValue('')
      setrowValue('')
      setwinner('')
      setcount(0)
      setblankArray([...[]])
      setlines([...[]])
    }
  
    if(winner != ""){Swal.fire(winner)}
  
    return (
      <>
          <div className='container d-flex justify-content-center flex-wrap'>
            <div className='w-100 text-center mb-3'>
                <form>
                    <input type="number" placeholder='Please Enter Number' value={userEnterValue} onChange={(e) => setuserEnterValue(e.target.value)} className='ps-2'/>
                    <button type='button' className='btn btn-success ms-2 me-2' onClick={createData}>Click</button>
                </form>
            </div>
            <div className={`${rowValue == 3 || rowValue == 4 ? 'w-50' : 'w-75'} bg-dark`}>
              <div className={`row row-cols-${rowValue} g-0`}>
                {
                  tableArray?.map((x,i) => <div style={x.click == true ? {cursor : 'pointer'} : {}} onClick={() => insert(x)} className={`col coldiv`} key={i}>{x.value}</div> )
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

export default DynamicTikTacToe