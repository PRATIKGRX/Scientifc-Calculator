const App = () => {
  return (
    <div className="p-1 h-screen">
      <div className="flex text-xs gap-2 max-h-[2%]">
        <p>NORM</p>
        <p>MATH</p>
        <p>DECI</p>
      </div>
      <div className="h-[20%] w-full bg-stone-200 rounded-xl text-black ">
        Display
      </div>
      <div className="grid grid-cols-6 gap-x-2 gap-y-5 md:gap-y-6 text-[clamp(6px,3vw,20px)] h-[42%] py-2">
        <button className="bg-yellow-300 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider text-black active:bg-yellow-800">
          SHIFT
        </button>
        <button className="bg-purple-400 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider  active:bg-purple-800">
          APLHA
        </button>
        <button className="bg-stone-500 w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
          left
        </button>
        <button className="bg-stone-500 w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
          right
        </button>
        <button className="bg-stone-500 w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
          MODE
        </button>
        <button className="bg-stone-500 w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider italic">
          2nd
        </button>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            CALC
          </button>
          <div
            className="absolute top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">SOLVE </p>{" "}
            <p className="text-purple-400">=</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full   rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            S dx
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">d/dx</p>{" "}
            <p className="text-purple-400">:</p>
          </div>
        </div>
        <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">up</button>
        <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">down</button>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            x <sup>-1</sup>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 
          "
          >
            <p className="text-yellow-300">x!</p>{" "}
            
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            Log <sub>x</sub>y
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">E</p>{" "}
            <p className="text-purple-400">II</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            x/y
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">x*y/z</p>{" "}
            <p className="text-purple-400">/R</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            root x
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300"><sup>3</sup>/x</p>{" "}
            <p className="text-purple-400">mod</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            x <sup>2</sup>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">x <sup>3</sup></p>{" "}
            <p className="text-purple-400">-</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            x <sup>y</sup>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">x/y</p>{" "}
            <p className="text-purple-400"></p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            log
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">10 <sup>x</sup></p>{" "}
            <p className="text-purple-400"></p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            Ln
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">e <sup>x</sup></p>{" "}
            <p className="text-purple-400">t</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            (-)
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">z</p>{" "}
            <p className="text-purple-400">a</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
           <sup>o ' "</sup>
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">FACT</p>{" "}
            <p className="text-purple-400">b</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            hyp
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">|x|</p>{" "}
            <p className="text-purple-400">c</p>
          </div>
        </div>
       <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            Sin
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">sin <sup>-1</sup></p>{" "}
            <p className="text-purple-400">d</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            Cos
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">cos <sup>-1</sup></p>{" "}
            <p className="text-purple-400">e</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            Tan
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">Tan <sup>-1</sup></p>{" "}
            <p className="text-purple-400">f</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            RCL
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">STO</p>{" "}
            <p className="text-purple-400">CLRv</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            ENG
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300 italic">i</p>{" "}
            <p className="text-purple-400">Cot</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            (
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">%</p>{" "}
            <p className="text-purple-400">Cot <sup>-1</sup>
            </p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            )
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">'</p>{" "}
            <p className="text-purple-400">x</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            S = D
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300 text-xs">x/y = y/z</p>{" "}
            <p className="text-purple-400">y</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-stone-500 w-full h-full  rounded-t-lg rounded-b-2xl tracking-wider active:bg-stone-800">
            M+
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">M-</p>{" "}
            <p className="text-purple-400">m</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-5 md:gap-y-6 pt-4 sm:pt-8 text-[clamp(6px,3vw,20px)] h-[35%] pb-2">
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            7
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[80%]
          "
          >
            <p className="text-yellow-300">CONST</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            8
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">CONV</p>{" "}
            <p className="text-purple-400">SI</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            9
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">Limit</p>{" "}
            <p className="text-purple-400">~</p>
          </div>
        </div>
        <button className="bg-orange-400 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider text-black active:bg-orange-900">del</button>
        <div className="relative">
          <button className="bg-orange-400 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider text-black active:bg-orange-900">
            AC
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">CLR</p>{" "}
            <p className="text-yellow-300">ALL</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            4
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">MATRIX</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            5
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[80%]
          "
          >
            <p className="text-yellow-300">VECTOR</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            6
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">FUNC</p>{" "}
            <p className="text-purple-400">HELP</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            x
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">nPr</p>{" "}
            <p className="text-purple-400">GCD</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            /
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">nCr</p>{" "}
            <p className="text-purple-400">LCM</p>
          </div>
        </div>
       <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            1
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[80%]
          "
          >
            <p className="text-yellow-300">STAT</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            3
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[80%]
          "
          >
            <p className="text-yellow-300">CMPLX</p>{" "}
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            3
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[80%]
          "
          >
            <p className="text-yellow-300">DISTR</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            +
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">Pol</p>{" "}
            <p className="text-purple-400">Ceil</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            -
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">Rec</p>{" "}
            <p className="text-purple-400">Floor</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            0
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">COPY</p>{" "}
            <p className="text-purple-400">PASTE</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            .
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">Ran#</p>{" "}
            <p className="text-purple-400">RanInt</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            Exp
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300">pie</p>{" "}
            <p className="text-purple-400 italic">e</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            Ans
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-between w-[80%]
          "
          >
            <p className="text-yellow-300"></p>{" "}
            <p className="text-purple-400">PreAns</p>
          </div>
        </div>
        <div className="relative">
          <button className="bg-slate-900 w-full h-full text-2xl rounded-t-lg rounded-b-2xl tracking-wider active:bg-black">
            =
          </button>
          <div
            className="absolute  top-[clamp(-25px,-4vw,-10px)]  left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-[80%]
          "
          >
            <p className="text-yellow-300">History</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
