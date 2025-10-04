import { useState } from "react";
const App = () => {
  const [activeState,setActiveState]=useState('');
  const toggleActiveState=(char)=>{
    setActiveState((prev) => (prev === char ? "" : char))
  }
  const [displayValue,setDisplayValue]=useState('');
  return (
    <div className="p-1 h-screen">
      <div className="flex text-xs max-h-[4%]">
        <p
  className={`overflow-hidden transition-all duration-500 ease-in-out
    ${activeState ? "w-2 opacity-100 mr-2" : "w-0 opacity-0 mr-0"}`}
>
  {activeState}
</p>
        <p className="mr-2">NORM</p>
        <p className="mr-2">MATH</p>
        <p>DECI</p>
      </div>
      <div className="h-[20%] leading-4 w-full bg-[#d4e4e3] rounded-xl text-black whitespace-normal break-words p-1 ">
        {displayValue}
      </div>
      <div className="grid grid-cols-6 gap-x-2 gap-y-5 md:gap-y-6 text-[clamp(8px,4vw,20px)] h-[42%] py-2">
        <button onClick={()=>toggleActiveState('S')} className="bg-[#fcc02c] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider text-black active:bg-yellow-800 border-t-[1.5px] border-t-[#f0e66f]">
          SHIFT
        </button>
        <button onClick={()=>toggleActiveState('A')} className="bg-[#7065af] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider  active:bg-purple-800 border-t-[1.5px] border-t-[#9a8fc8]">
          APLHA
        </button>
        <button className="bg-[#504e53] w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
          left
        </button>
        <button className="bg-[#504e53] w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
          right
        </button>
        <button className="bg-[#504e53] w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
          MODE
        </button>
        <button className="bg-[#504e53] w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider italic border-t-[1.5px] border-t-[#8a878e]">
          2nd
        </button>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            CALC
          </button>
          <div
            className="absolute top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">SOLVE </p>{" "}
            <p className="text-[#9589d1]">=</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            &int; dx
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">d/dx</p>{" "}
            <p className="text-[#9589d1]">:</p>
          </div>
        </div>
        <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
          up
        </button>
        <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
          down
        </button>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            x <sup>-1</sup>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2  text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">x!</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            Log <sub>x</sub>y
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              <math>
                <mo>&#x2211;</mo>
              </math>
            </p>{" "}
            <p className="text-[#9589d1]">II</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            <math>
              <mfrac>
                <mn>x</mn>
                <mn>y</mn>
              </mfrac>
            </math>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          " 
          >
            <p className="text-[#f0d322]">
              <math>
                <mrow>
                  <mi>x</mi>
                  <mo>&#x2062;</mo>
                  <mfrac>
                    <mi>y</mi>
                    <mi>z</mi>
                  </mfrac>
                </mrow>
              </math>
            </p>{" "}
            <p className="text-[#9589d1]"> &divide; R</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            <math>
              <msqrt>
                <mi style={{ position: "relative", top: "0.2em" }}>x</mi>
              </msqrt>
            </math>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              <math>
                <mroot>
                  <mi style={{ position: "relative", top: "0.2em" }}>x</mi>
                  <mn>3</mn>
                </mroot>
              </math>
            </p>{" "}
            <p className="text-[#9589d1]">mod</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            x <sup>2</sup>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              x <sup>3</sup>
            </p>{" "}
            <p className="text-[#9589d1]">-</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            x <sup>y</sup>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              <math>
                <mroot>
                  <mi style={{ position: "relative", top: "0.2em" }}>y</mi>
                  <mi>x</mi>
                </mroot>
              </math>
            </p>{" "}
            <p className="text-[#9589d1]"></p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            log
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              10 <sup>x</sup>
            </p>{" "}
            <p className="text-[#9589d1]"></p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            Ln
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              e <sup>x</sup>
            </p>{" "}
            <p className="text-[#9589d1]">t</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            (-)
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              <math>
                <mo>∠</mo>
              </math>
            </p>{" "}
            <p className="text-[#9589d1]">a</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            <math>
              <mspace width="0.2em" />
              <mo>°</mo>
              <mspace width="0.2em" />
              <mo>'</mo>
              <mspace width="0.2em" />
              <mo>"</mo>
            </math>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">FACT</p>{" "}
            <p className="text-[#9589d1]">b</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            hyp
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">|x|</p>{" "}
            <p className="text-[#9589d1]">c</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            Sin
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              sin <sup>-1</sup>
            </p>{" "}
            <p className="text-[#9589d1]">d</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            Cos
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              cos <sup>-1</sup>
            </p>{" "}
            <p className="text-[#9589d1]">e</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            Tan
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              Tan <sup>-1</sup>
            </p>{" "}
            <p className="text-[#9589d1]">f</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            RCL
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">STO</p>{" "}
            <p className="text-[#9589d1]">CLRv</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            ENG
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322] italic">i</p>{" "}
            <p className="text-[#9589d1]">Cot</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            (
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">%</p>{" "}
            <p className="text-[#9589d1]">
              Cot <sup>-1</sup>
            </p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            )
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              <math>
                <mo>′</mo>
              </math>
            </p>{" "}
            <p className="text-[#9589d1]">x</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            S
            <math>
              <mo>&#x21CC;</mo> {/* ⇌ */}
            </math>
            D
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322] text-xs">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mfrac>
                  <mi>x</mi>
                  <mi>y</mi>
                </mfrac>
                <mo>&#x2192;</mo>
                <mi>x</mi>
                <mfrac>
                  <mi>y</mi>
                  <mi>z</mi>
                </mfrac>
              </math>
            </p>{" "}
            <p className="text-[#9589d1]">y</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#504e53] w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800 border-t-[1.5px] border-t-[#8a878e]">
            M+
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">M-</p>{" "}
            <p className="text-[#9589d1]">m</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-4 sm:gap-y-5  text-[clamp(6px,3vw,20px)] h-[34%] pt-3 sm:pt-6">
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'7')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            7
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">CONST</p>
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'8')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            8
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">CONV</p>{" "}
            <p className="text-[#9589d1]">SI</p>
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'9')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            9
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">Limit</p>{" "}
            <p className="text-[#9589d1]">
              <math>
                <mo>&#x221E;</mo> {/* ∞ */}
              </math>
            </p>
          </div>
        </div>
        <button onClick={()=>setDisplayValue((prev)=>prev.slice(0,-1))} className="bg-[#e78f50] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider text-black active:bg-orange-900 border-t-[1.5px] border-t-[#c78d6c]">
          del
        </button>
        <div className="relative">
          <button onClick={()=> setDisplayValue('')} className="bg-[#e78f50] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider text-black active:bg-orange-900 border-t-[1.5px] border-t-[#c78d6c] text-[clamp(18px,3vw,22px)]">
            AC
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">CLR</p>{" "}
            <p className="text-[#f0d322]">ALL</p>
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'4')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            4
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          " 
          >
            <p className="text-[#f0d322]">MATRIX</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'5')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            5
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">VECTOR</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'6')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            6 
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%]   text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">FUNC</p>{" "}
            <p className="text-[#9589d1]">HELP</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            x
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">nPr</p>{" "}
            <p className="text-[#9589d1]">GCD</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            <math>
              <mo>&#x00F7;</mo> {/* ÷ */}
            </math>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">nCr</p>{" "}
            <p className="text-[#9589d1]">LCM</p>
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'1')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            1
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">STAT</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'2')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            2
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">CMPLX</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'3')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            3
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">DISTR</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            +
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">Pol</p>{" "}
            <p className="text-[#9589d1]">Ceil</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            -
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">Rec</p>{" "}
            <p className="text-[#9589d1]">Floor</p>
          </div>
        </div>
        <div className="relative">
          <button onClick={()=> setDisplayValue((prev)=>prev+'0')} className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            0
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">COPY</p>{" "}
            <p className="text-[#9589d1]">PASTE</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            .
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">Ran#</p>{" "}
            <p className="text-[#9589d1]">RanInt</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e] text-[clamp(18px,3vw,22px)]">
            Exp
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">
              <math>
                <mi>&#x03C0;</mi>
              </math>
            </p>{" "}
            <p className="text-[#9589d1] italic">e</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e] text-[clamp(18px,3vw,22px)]">
            Ans
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]"></p>{" "}
            <p className="text-[#9589d1]">PreAns</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-[#272a31] w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black border-t-[1.5px] border-t-[#8a878e]">
            =
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[88%] text-[clamp(6px,3vw,18px)]
          "
          >
            <p className="text-[#f0d322]">History</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
