import React from 'react';
import NoMatches from './NoMatches';
import Photo from './Photo';

/* Displays either an image gallery of search results or a No Matches error page */
const Gallery = ({ data }) => {
    
    const photos = data; 
    
    if (photos.length > 0) {
        let images = photos.map( img => <Photo url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_q.jpg`} key={img.id} /> );
        return (
            <div className="photo-container">  
                <h2>✨ Results ✨</h2>
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

export default Gallery;