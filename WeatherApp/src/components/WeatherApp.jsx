import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'
import humidityIcon from '../assets/humidity.png'
import { useEffect, useState } from 'react'

const WeatherApp = () => {
  const [query, setQuery] = useState("")
  const [weatherData, setWeatherData] = useState({
    city: "London",
    temp: null,
    humidity: null,
    windspeed: null,
    loading: false,
    error: null,
  })
  const [conditionIcon, setConditionIcon] = useState(clearIcon);

  const api = async (city) => {
    const key = import.meta.env.VITE_APP_ID
    if (!key) {
      setWeatherData((p) => ({ ...p, error: "Missing API key" }))
      return
    }

    setWeatherData((p) => ({ ...p, loading: true, error: null }))
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${key}`
      const res = await fetch(url)
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || `HTTP ${res.status}`)
      }
      const data = await res.json()
      console.log(data)
      setWeatherData({
        city: data.name || city,
        temp: data.main?.temp ?? null,
        humidity: data.main?.humidity ?? null,
        windspeed: data.wind?.speed ?? null,
        loading: false,
        error: null,
      })
     
      setConditionIcon(() => {
      if(data.weather.main === "Clear") return clearIcon;
      if(data.weather.main === "Clouds") return cloudIcon;
      if(data.weather.main === "Drizzle") return drizzleIcon;
      if(data.weather.main === "Rain") return rainIcon;
      if(data.weather.main === "Snow") return snowIcon;
      return clearIcon;
      })

    } catch (error){
      setWeatherData((Icon) => ({ ...p, loading: false, error: error.message || "Failed to fetch" }))
    }
  }

  useEffect(() => {
    api('london')
  }, [setWeatherData])

  function handleInputChange(e) {
    if(e.target.value === "") return alert("please enter a city name")
   
    setQuery(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    api(query)
    setQuery("")
  }
  

  return (
    <section className='flex justify-center ml-90 items-center min-h-[30rem] w-[30rem] bg-purple-900 rounded-lg'>
      <div className='flex flex-col gap-6 items-center p-6'>
        <h2 className='text-3xl font-bold text-white'>Weather App</h2>

        <form onSubmit={handleSubmit} className='flex gap-4'>
          <input
            type="text"
            placeholder='search'
            value={query}
            onChange={handleInputChange}
            className='p-2 rounded-full bg-white'
            aria-label='Search city'
          />
          <button type='submit' style={{ cursor: 'pointer', backgroundColor: 'white', borderRadius: '100%', padding: '8px' }}>
            <img src={searchIcon} alt='search icon' width={20} height={20} />
          </button>
        </form>

        <div className='flex flex-col items-center justify-center'>
          <img src={clearIcon} onChange={setConditionIcon} alt="" width={150} height={150} />
          <p className='text-6xl text-white'>{weatherData.temp !== null ? `${Math.round(weatherData.temp)}°C` : '--°C'}</p>
          <p className='text-xl text-white '>{weatherData.city}</p>
        </div>

        {weatherData.loading && <p className='text-white'>Loading...</p>}
        {weatherData.error && <p className='text-red-300'>{weatherData.error}</p>}

        <div className='flex gap-10 mt-4 text-white'>
          <div className='flex items-center gap-2'>
            <img src={humidityIcon} alt="humidity" />
            <div>
              <p>{weatherData.humidity ?? '--'} %</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <img src={windIcon} alt="wind" />
            <div>
              <p>{weatherData.windspeed ?? '--'} km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherApp