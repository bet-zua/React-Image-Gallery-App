//Stateful component -> class component
import React from 'react';
import NoMatches from './NoMatches';
import Photo from './Photo';

const PhotoGallery = ({ data }) => {
    

    const photos = data; //destructuring props
    
    if (photos.length > 0) {
        let images = photos.map( img => <Photo url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_q.jpg`} key={img.id} /> );
        return (
            <div className="photo-container">  
                <h2>Results</h2>
                <ul> { images } </ul>
            </div> 
        );
    } else {
        return (
            <div className="photo-container">  
                <ul>
                    <NoMatches />
                </ul>
            </div> 
        );
    }
}

//history
//search
export default PhotoGallery;