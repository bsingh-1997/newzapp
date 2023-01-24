import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './loading';
export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }


    async componentDidMount() {
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=265c3f5fc6e242a3aa611cb01d3c747c&page=1&pageSize=${this.props.pageSize}`
        // let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-12-15&sortBy=publishedAt&apiKey=265c3f5fc6e242a3aa611cb01d3c747c"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })
    }
    prevp = async () => {
        console.log("prevvious")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=265c3f5fc6e242a3aa611cb01d3c747c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    nextp = async () => {
        console.log("nexttp")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=265c3f5fc6e242a3aa611cb01d3c747c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData)
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">News - Top Headlines!</h1>
                {/* <Spinner/> */}
                < div className="row" my-3>

                    {this.state.articles.map((element) => {

                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 120) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://cdn.dribbble.com/users/424982/screenshots/2306487/dribbble.png"} url={element.url ? element.url : ""} publishedAt={element.publishedAt ? element.publishedAt : ""} />

                        </div>
                    })}

                    <div class="d-flex justify-content-between my-3">

                        <button disabled={this.state.page <= 1} type="button" class="btn btn-secondary" onClick={this.prevp}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-secondary"onClick={this.nextp}> Next &rarr;</button>

                    </div>



                </div>
            </div>
        )
    }
}

export default News

