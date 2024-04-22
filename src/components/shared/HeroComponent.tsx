import '../../styles/HeroStyle.css'
import { useEffect, useState } from 'react'
import instance from '../../services/axios'
import apiRequest from '../../services'

interface Banner {
  id?: number
  title?: string
  release_year?: number
  name?: string
  original_name: string
  overview: string
  poster_path?: any
  backdrop_path?: any
}

const Hero = () => {
  const [bannerMovie, setBannerMovie] = useState<Banner>()

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(apiRequest.fetchBanner)
      setBannerMovie(
        response.data.results[Math.floor(Math.random() * response.data.results.length - 1)],
      )
      return response
    }
    fetchData()
  }, [])

  function truncate(str: any, n: any) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className='hero'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}"
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='hero-content'>
        <h1 className='hero-title'>
          {bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}
        </h1>

        <div className='hero-btns'>
          <button className='hero-btn'>Play</button>
          <button className='hero-btn'>My List</button>
        </div>

        <h2 className='hero-desc'>{truncate(bannerMovie?.overview, 150)}</h2>
      </div>
      <div className='hero-fadebottom'></div>
    </header>
  )
}

export default Hero
