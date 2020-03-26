import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/51s5.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }
    
    render() {
        return (
            <div>
                {/* <div class="w-container">
                    <div class="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" class="form" onSubmit={this.handleSubmit}>
                            <div class="w-row">
                                <div class="w-col w-col-5"><label for="name">Text Top</label>
                                    <input 
                                            type="text"
                                            name="topText"
                                            value={this.state.topText}
                                            onChange={this.handleChange}
                                            class="w-input"
                                        /> 
                                </div>
                                <div class="w-col w-col-5"><label for="email">Bottom Text</label>
                                    <input 
                                            type="text"
                                            name="bottomText"
                                            value={this.state.bottomText}
                                            onChange={this.handleChange}
                                            class="w-input"
                                        />
                                </div>
                                <div class="w-col w-col-2"><input type="submit" value="GEN" data-wait="Please wait..." class="submit-button w-button"/> </div>
                            </div>
                        </form>
                    </div>
                    <div class="box-img-meme-title">
                        <img src={this.state.randomImg} alt="" class="img-meme"/>
                        <h2 class="heading-2 text-top">{this.state.topText}</h2>
                        <h2 class="heading-3 bottom-text">{this.state.bottomText}</h2>
                    </div>
                </div>
                <div class="section-2">
                    <div class="w-container">
                        <p class="paragraph"><a href="http://damian.epizy.com/" target="_blank"><span class="text-span">Damian Santilli</span></a></p>
                    </div>
                </div> */}

                {/* AQUI */}
                
                <div class="w-container">
                    <div class="form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" class="form" onSubmit={this.handleSubmit}>
                        <div class="w-row">
                            <div class="w-col w-col-5 w-col-small-5 w-col-tiny-4"><label for="name">Text Top</label>

                                <input 
                                    type="text"
                                    name="topText"
                                    value={this.state.topText}
                                    onChange={this.handleChange}
                                    class="w-input"
                                /> 
                            
                            </div>
                            <div class="w-col w-col-5 w-col-small-5 w-col-tiny-4"><label for="email">Bottom Text</label>

                                <input 
                                    type="text"
                                    name="bottomText"
                                    value={this.state.bottomText}
                                    onChange={this.handleChange}
                                    class="w-input"
                                />
                                
                            </div>
                            <div class="w-col w-col-2 w-col-small-2 w-col-tiny-4"><input type="submit" value="GEN" data-wait="Please wait..." class="submit-button w-button"/></div>
                        </div>
                    </form>
                    </div>
                    <div class="box-img-meme-title">
                        <img src={this.state.randomImg} alt="" class="img-meme"/>
                        <h2 class="heading-2 text-top">{this.state.topText}</h2>
                        <h2 class="heading-3 bottom-text">{this.state.bottomText}</h2>
                    </div>
                </div>
                <div class="section-2">
                    <div class="w-container">
                        <p class="paragraph"><a href="http://damian.epizy.com/" target="_blank"><span class="text-span">Damian Santilli</span></a></p>
                    </div>
                </div>



            </div>
        )
    }
}

export default MemeGenerator

