const VideoPlayer = () => {

return (

<div className="
bg-black
rounded-2xl
overflow-hidden
">


<video
className="w-full aspect-video"
controls
>

<source
src="https://www.w3schools.com/html/mov_bbb.mp4"
type="video/mp4"
/>

</video>


</div>

)

}


export default VideoPlayer;