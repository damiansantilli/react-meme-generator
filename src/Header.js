import React from "react"

function Header() {
    return (
        <div class="section">
           <div class="w-container">
                <div class="w-row">
                    <div class="w-col w-col-10 w-col-small-10 w-col-tiny-10">
                        <h1 class="heading titulo-header">React Meme Generator</h1>
                    </div>
                    <div class="column w-col w-col-2 w-col-small-2 w-col-tiny-2"><img src="trollface.png" alt="" class="image"/></div>
                </div>
            </div>
        </div>
    )
}

export default Header