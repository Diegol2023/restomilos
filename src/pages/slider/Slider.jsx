import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = () => {
    const images = [
        {
         original: "/public/img/fachada.jpg",
         thumbnail: "/public/img/fachada.jpg",
         },
         {
            original: "/public/img/mate.jpg",
            thumbnail: "/public/img/mate.jpg",          
          },
                                                                             
          
     ];
    return ( 
        
        <div style={{ width: '60vw', margin: '5 auto'}}>
            <ImageGallery  items={images}   />
        </div>   
        
    );
}
export default Slider;