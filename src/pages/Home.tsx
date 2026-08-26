import React from 'react'
import ActivityCard from '../components/ActivityCard';
function Home() {
  return (
    <div className="flex justify-center gap-20 pt-20">
        <ActivityCard
            title="Staze za šetnju"
            image="/images/setnja.png"
            link="/setnja"
        />

        <ActivityCard
              title="Staze biciklizam"
              image="/images/biciklizam.png"
              link="/biciklizam"
            />
    </div>
  )
}

export default Home