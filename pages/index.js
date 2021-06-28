import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [f, setF] = useState(false)
  const [op, setOp] = useState("")
  const inputChange = () => {
      setA(document.getElementById("calc-input").value)
  }
  const buttonClick = (e) => {
      const val = e.target.id
      if(val === '1' || val === '2' ||val === '3' ||val === '4' ||val === '5' ||val === '6' ||val === '7' ||val === '8' ||val === '9' ||val === '0'){
        if(f === false){
          var c = 10*a
          c = c + Number(val)
          setA(c)
        }
        else{
          var c = 10*b
          c = c + Number(val)
          setB(c)
        }
      } 
      if(val === "ac"){
        setA(0)
        setB(0)
        setF(false)
      }
      if(val === "+/-"){
        if(f === false){
          setA(-a)
        }
        else setB(-b)
      }
      if(val === "+" || val === "-" || val === "x" || val === "/" || val === "%"){
        setOp(val)
        setF(true)
      }
      if(val === "="){
        var c = 0
        if(op === "+"){
          c = a+b
          setA(c)
          setB(0)
          setF(false)
        }
        if(op === "-"){
          c = a-b
          setA(c)
          setB(0)
          setF(false)
        }
        if(op === "x"){
          c = a*b
          setA(c)
          setB(0)
          setF(false)
        }
        if(op === "/"){
          c = a/b
          setA(c)
          setB(0)
          setF(false)
        }
        if(op === "%"){
          c = a%b
          setA(c)
          setB(0)
          setF(false)
        }
        
      }
  }
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-gray-200">
      <Head>
        <title>MLH Calculator</title>
        <meta name="description" content="Calculator app which supports basic arithmetic operations like addition(+), subtraction(-), multiplication(*), division(/), and modulus(%)" />
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
      </Head>
      <h1 className="font-sans text-4xl text-center">Calculator App</h1>
      <div className="calculator flex flex-col items-center justify-center mt-8 w-full">
        <div className="display rounded-t-xl bg-gray-900 w-1/2 py-10">
          <input type="number" id="calc-input" className="text-2xl text-right w-full font-semibold bg-gray-900 pr-2 text-white outline-none" value={f ? b : a} onChange={inputChange}></input>

        </div>
        <div className="w-1/2 grid grid-cols-4 grid-flow-col justify-items-center bg-gray-900 pb-4">
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-gray-500 hover:bg-gray-600 cursor-pointer rounded-full" id="ac" onClick={buttonClick}>AC</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-gray-500 hover:bg-gray-600 cursor-pointer text-center rounded-full" id="+/-" onClick={buttonClick}>+/-</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-gray-500 hover:bg-gray-600 cursor-pointer rounded-full" id="%" onClick={buttonClick}>%</div>
          <div className="h-16 w-16 flex text-center items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-600 cursor-pointer rounded-full" id="/" onClick={buttonClick}>
          ÷
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-4 grid-flow-col justify-items-center bg-gray-900 py-4">
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="7" onClick={buttonClick}>7</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="8"  onClick={buttonClick}>8</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="9"  onClick={buttonClick}>9</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-600 cursor-pointer rounded-full" id="x"  onClick={buttonClick}>
            x
          </div>
        </div>
        <div className="w-1/2 bg-gray-900 grid grid-cols-4 grid-flow-col py-4 justify-items-center">
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="4"  onClick={buttonClick}>4</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="5"  onClick={buttonClick}>5</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="6"  onClick={buttonClick}>6</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-600 cursor-pointer rounded-full" id="-"  onClick={buttonClick}>
            -
          </div>
        </div>
        <div className="w-1/2 bg-gray-900 grid grid-cols-4 grid-flow-col py-4  justify-items-center">
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="1"  onClick={buttonClick}>1</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="2"  onClick={buttonClick}>2</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer rounded-full" id="3"  onClick={buttonClick}>3</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-600 cursor-pointer rounded-full" id="+"  onClick={buttonClick}>
          +
          </div>
        </div>
        <div className="w-1/2 bg-gray-900 grid grid-cols-4 grid-flow-col py-4 
        rounded-b-lg
        pb-4
        pl-3
        justify-items-center">
          <div className="h-16 w-full flex items-center justify-center text-3xl font-extrabold text-gray-100 bg-yellow-500 hover:bg-yellow-700 cursor-pointer col-span-2 rounded-full" id="0"  onClick={buttonClick}>0</div>
          <div className="h-16 w-16 bg-yellow-500 flex items-center justify-center text-3xl font-extrabold text-gray-100 rounded-full hover:bg-yellow-700 cursor-pointer" id="."  onClick={buttonClick}>.</div>
          <div className="h-16 w-16 flex items-center justify-center text-3xl font-extrabold text-gray-100 rounded-full  bg-yellow-500 hover:bg-yellow-700 cursor-pointer" id="="  onClick={buttonClick}>=</div>
        </div>
      </div>
    </div>
  )
}