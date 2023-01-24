import React, { Component } from 'react'

export class Newsitem extends Component {
    
    render() {
        let {title,description,imageurl,url,publishedAt,name}= this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        {/* <p className="card-text">{name}</p> */}
                        <p className="card-text">{publishedAt}</p>
                        <a href={url} target="_blank" className="btn btn-primary btn-sm ">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
