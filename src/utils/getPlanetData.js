export function getPlanetData (planet) {
  if (!planet) return []

  const distance = planet.distance_moyenne_average_distance_x10_6_km

  const speed = 58000

  const durationInDays = (distance * 1e6) / speed / 24
  const formattedTravelTime = durationInDays.toFixed(0) || 0

  const temperature = planet.temperature_moyenne_mean_temperature_degc
  const orbitalPeriod = planet.periode_de_revolution_jours_orbital_period_days
  const satellitesNumber = planet.nombre_de_satellites_number_of_satellites
  const gravity = planet.gravite_gravity_m_s2
  const atmosphericComposition = planet.atmospheric_composition

  const euroPrice = (formattedTravelTime * 1000)
  const dollarPrice = (formattedTravelTime * 1137)
  const yenPrice = (formattedTravelTime * 161886)

  return [
    {
      journey: {
        groupTitle: 'Your Journey',
        data: [
          { title: 'Distance', text: distance + ' kms', icon: 'earth' },
          { title: 'Duration', text: formattedTravelTime + ' days', icon: 'stopwatch' },
          { title: 'Speed', text: '58k km/h', icon: 'timer' }
        ]
      },
      price: {
        groupTitle: 'Price',
        data: [
          { title: 'Euro', text: euroPrice + '€', icon: 'logo-euro' },
          { title: 'Dollar', text: dollarPrice + '$', icon: 'logo-usd' },
          { title: 'Yen', text: yenPrice + '¥', icon: 'logo-yen' }
        ]
      },
      getReady: {
        groupTitle: 'Get Ready',
        data: [
          { title: 'Temperature', text: temperature + '°C', icon: 'thermometer' },
          { title: 'Orbital Period', text: orbitalPeriod + ' days', icon: 'planet' },
          { title: 'Satellites Number', text: satellitesNumber, icon: 'logo-ionic' },
          { title: 'Gravity', text: gravity + 'm/s²', icon: 'magnet' },
          {
            title: 'Atmospheric composition',
            icon: 'logo-react',
            chemical: atmosphericComposition
          }
        ]
      }
    }
  ]
}
