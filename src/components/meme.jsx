import { useState, useEffect } from 'react'
export default function Meme () {
  const [meme, setMemes] = useState(
    {
    topText: "",
    bottomText:"",
    randomImage:'https://i.imgflip.com/yk3wp.jpg'
    }
  )
    function handleOnChange(event){
        const {name,value} = event.target
        setMemes(prevMemes => ({
            ...prevMemes,
            [name]:value
        }))
    }
    
    const [allMemes, setAllMemes] = useState([])

         useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
             .catch(error => console.log(error));
    }, [])

    function handleClick() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMemes(prevMemes => ({
            ...prevMemes,
            randomImage: url
  }));
}



    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleOnChange}
                    name = "topText"
                    value={meme.topText}
                    
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                     onChange={handleOnChange}
                    name = "bottomText"
                    value={meme.bottomText}
                    
                />
                <button 
                    className="form--button"
                   onClick={handleClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src = {meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
             
        </main>
    )
}

