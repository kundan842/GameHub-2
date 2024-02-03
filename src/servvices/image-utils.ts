import noImage from '../assets/no-image-placeholder.webp'
const getCroppedImageUrl = (url:string) =>
{
    const target = 'media/'
    if (!url) return noImage;
    const index = url.indexOf(target)+target.length;
    // console.log(url.slice(0,index)+'/crop/600/400/' + url.slice(index))
   return  url.slice(0,index)+'crop/600/400/' + url.slice(index)

}
export default getCroppedImageUrl