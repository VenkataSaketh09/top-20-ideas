
import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function Hero() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='my-10 flex flex-col items-center gap-5'>
      <h2 className='text-3xl font-bold text-center'>
        Top 20 Productive Ideas for your<br /> Next Startup
      </h2>
      <h2 className='text-center my-3'>
        <strong className='text-primary'>Like Your Favourite Ideas.</strong>
        Write your Best Ideas, No Account needed!
      </h2>
      <select
        value={theme} // This makes it a controlled component
        onChange={(event) => setTheme(event.target.value)} // Updates theme based on selection
        className="select select-accent w-full max-w-xs"
      >
        <option disabled value="">
          Select Theme
        </option>
        <option value="Dark">Dark</option>
        <option value="CupCake">CupCake</option>
        <option value="Bumblebee">Bumblebee</option>
        <option value="Emerald">Emerald</option>
        <option value="Corporate">Corporate</option>
        <option value="Synthwave">Synthwave</option>
        <option value="Retro">Retro</option>
        <option value="Cyberpunk">Cyberpunk</option>
        <option value="Aqua">Aqua</option>
        <option value="Lemonade">Lemonade</option>
      </select>
    </div>
  )
}

export default Hero
