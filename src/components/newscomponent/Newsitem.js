import React from 'react'

const Newsitem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date } = props;
    return (
        <div className='my-3 mx-3 '>
            <div className="card my-3" style={{ width: "18rem" }}>
                <img src={!imgUrl ? "https://newsapi.org/images/flags/us.svg" : imgUrl} className="card-img-top" alt="..." style={{ width: "18rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text-start">{description}</p>
                    <p class="card-text"><small class="text-body-secondary">By  {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel='norefrrer' href={newsUrl} target='_blank' className="btn btn-sm btn-light">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default Newsitem