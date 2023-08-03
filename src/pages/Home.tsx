import image from '../../public/imgs/Image2.jpg'
import { Store } from './Store'



export function Home() {
  return (
    <>
            <div className='hero'>
                <div className="card bg-dark text-white border-0">
                    <img src={image} className="card-img" alt="Background" height="550px"/>
                    <div className="card-img-overlay d-flex flex-colum 
                    align-items-center">
                        <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TREND</p>
                        </div> 
                    </div>
                </div>
                <Store/>
            </div>
        </>
  )
}
