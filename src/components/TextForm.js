import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUPClick= ()=>{
       // console.log("Upper case clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick= ()=>{
        // console.log("Upper case clicked");
         let newText=text.toLowerCase();
         setText(newText);
    }

    const handleCpClick=()=>{
        let newText=text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
          });
        setText(newText);
       
    }

    const handleSpaces=()=>{
        console.log("spaces handled");
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        //setText(newText);
    }

    const handleOnChange= (event)=>{
        //console.log("Text changed");
        setText(event.target.value);
    }

    const [text,setText]=useState("Enter text here");
    return (
        <>
         <div>
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control my-2" id="exa" value={text}  style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-2`} onClick={handleUPClick}>Convert To Upper Case</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-2`} onClick={handleLoClick}>Convert To Lower Case</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-2`} onClick={handleCpClick}>Convert To Capital Case</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-2`} onClick={handleSpaces}>Remove White Spaces</button>



        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Summary of Your Text Text</h2>
            <p>Word {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} , Characters {text.length}</p>
        </div>
        </>
       
    )
}
