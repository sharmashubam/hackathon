import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { MainContext } from '../context/MainContext'
import WorkoutDetail from '../components/WorkoutDetail'
import Load from './Load';
const Workout = () => {
  const { search, setSearch, loading, setLoading, data, setData, err, setErr, diffculty, setDifficulty } = useContext(MainContext)
  const pathname = useLocation()
  const [color, setColor] = useState(1)


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: { muscle: search, difficulty: diffculty },
      headers: {
        'X-RapidAPI-Key': '284a50d512mshd7c124804788b79p1afc00jsneeb78d02d8e2',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    if (search) {

      axios.request(options).then(function (response) {
        setData(response.data);
        console.log(data)
        setLoading(false)
      }).catch(function (error) {
        setErr(error);
      });

    }



  }, [pathname, search, color])
  const beginner = () => {
    setDifficulty('beginner')
    setColor(1)
  }
  const intermediate = () => {
    setDifficulty("intermediate")
    setColor(2)
  }
  return (
    <div className='pt-20 '>
      <input className='border-2 border-black rounded-l block m-auto my-5 px-3 py-2' onChange={(e) => setSearch(e.target.value)} type='text' placeholder="Type a muscle" />
      <div className='w-fit mx-auto flex gap-6'>
        <button onClick={beginner} className={color == 1 ? 'bg-black text-white text-lg border  py-2 px-4' : 'border-2 text-lg  py-2 px-4 '}>Beginner</button>
        <button onClick={intermediate} className={color == 2 ? 'bg-black text-white text-lg border  py-2 px-4' : 'border-2 text-lg   py-2 px-4 '}>Intermediate</button>

      </div>
      {loading ? <Load /> :
      
      <div className='xl:w-[45%] w-full mx-auto m-4 p-4 md:w-[70%] shadow-xl '>
        {data?.map((item, id) => {
          return (

            <WorkoutDetail key={id} item={item} />

          )
        })}
      </div>
      }
      
    </div>
  )
}

export default Workout