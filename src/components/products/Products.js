import './products.css'
import picturePosts1 from '../../assets/full-1.svg'
import picturePosts2 from '../../assets/full-2.svg'
import photo1 from '../../assets/photo-1.svg'
import photo2 from '../../assets/photo-2.svg'
import photo3 from '../../assets/photo-3.svg'
import photo4 from '../../assets/photo-4.svg'
import photo5 from '../../assets/photo-5.svg'    
import photo6 from '../../assets/photo-6.svg'
import radiusPic1 from '../../assets/radius-pic-1.svg'
const Products = ()=>{
    return (
        <div className='featured-posts container'>
              <h2>Featured Posts</h2>
             <div className='underline'></div>
             <div className='posts-col'>
                <div className='picture-1'>
                    <img src={picturePosts1} alt="" />
                </div>
                <div className='picture-2'>
                    <img src={picturePosts2} alt="" />
                </div>
             </div>

             <h2>Most Recent</h2>
             <div className='underline'></div>
             <div className='container collection'>
                <div className='collection-el'>
                     <img src={photo1} alt="" />
                    <div className='card-text'>
                        <h3>Still Standing Tall</h3>
                        <p>Life begins at the end of your comfort zone.</p>
                        <div  className='text-collection'>
                            <div className='title-collection'>
                                <img className='image-collection' src={radiusPic1} alt="" />
                                <h6>William Wong</h6>
                            </div>
                            <div>
                               <span>9/25/2015</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='collection-el'>
                     <img src={photo2} alt="" />
                    <div className='card-text'>
                        <h3>Still Standing Tall</h3>
                        <p>Life begins at the end of your comfort zone.</p>
                        <div  className='text-collection'>
                            <div className='title-collection'>
                                <img className='image-collection' src={radiusPic1} alt="" />
                                <h6>William Wong</h6>
                            </div>
                            <div>
                               <span>9/25/2015</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='collection-el'>
                     <img src={photo3} alt="" />
                    <div className='card-text'>
                        <h3>Still Standing Tall</h3>
                        <p>Life begins at the end of your comfort zone.</p>
                        <div  className='text-collection'>
                            <div className='title-collection'>
                                <img className='image-collection' src={radiusPic1} alt="" />
                                <h6>William Wong</h6>
                            </div>
                            <div>
                               <span>9/25/2015</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='collection-el'>
                     <img src={photo4} alt="" />
                    <div className='card-text'>
                        <h3>Still Standing Tall</h3>
                        <p>Life begins at the end of your comfort zone.</p>
                        <div  className='text-collection'>
                            <div className='title-collection'>
                                <img className='image-collection' src={radiusPic1} alt="" />
                                <h6>William Wong</h6>
                            </div>
                            <div>
                               <span>9/25/2015</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='collection-el'>
                     <img src={photo5} alt="" />
                    <div className='card-text'>
                        <h3>Still Standing Tall</h3>
                        <p>Life begins at the end of your comfort zone.</p>
                        <div  className='text-collection'>
                            <div className='title-collection'>
                                <img className='image-collection' src={radiusPic1} alt="" />
                                <h6>William Wong</h6>
                            </div>
                            <div>
                               <span>9/25/2015</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='collection-el'>
                     <img src={photo6} alt="" />
                    <div className='card-text'>
                        <h3>Still Standing Tall</h3>
                        <p>Life begins at the end of your comfort zone.</p>
                        <div  className='text-collection'>
                            <div className='title-collection'>
                                <img className='image-collection' src={radiusPic1} alt="" />
                                <h6>William Wong</h6>
                            </div>
                            <div>
                               <span>9/25/2015</span>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
        </div>
    )
}

export default Products