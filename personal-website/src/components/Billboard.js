import background from '../assets/web_background.png';


export default function Billboard(){
    return(
        <div className='h-[50vh] bg-center bg-cover' style={{backgroundImage:`url(${background})`}}>

        </div>
    )
}