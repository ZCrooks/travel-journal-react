import path from '../images/Path.png'

const Content = (props) => {
    return (
     
            <div className="card">
                <div className="img-container">
                    <img className='main-pic' src={props.image} />
                </div>
                <div className='text-container'>
                    <div className='country-link'>
                        <img src={path}/>
                        <p className='location'>{props.location}</p>
                        <a href={props.url} className='url'>View on Google Maps</a>
                    </div>
                    <div className='info'>
                        <h2>{props.title}</h2>
                        <p className='date'>{props.startDate} - {props.endDate}</p>
                        <p className='description'>{props.description}</p>
                    </div>          
                </div>
            </div>
      
    )
}

export default Content;