
import Button from './Button'

const Card = ({data}) => {
  return (
    <div className='h-44 rounded-xl cursor-pointer  object-center bg-cover text-white object-cover flex flex-col justify-end px-2 space-y-5 w-72 bg-amber-400 py-2.5'
   style={{ backgroundImage: `url(${data.banner})` }}
    >
      <h2 className='px-2.5 font-black text-2xl'>{data.name} </h2>
      <div className='flex justify-between'>
           <Button text={data.season}/>
           <Button text={data.duration}/>
      </div>
    </div>
  )
}

export default Card
