import ActivityCard from '../components/ActivityCard';
import '../styles/Home.css';
function Home() {
  return (
      <div className="home-container">
          <ActivityCard
              title="Staze za šetnju"
              image="/images/setnja.png"
              link="/setnja"
          />

          <ActivityCard
                title="Staze za biciklizam"
                image="/images/biciklizam.png"
                link="/biciklizam"
              />
      </div>
  )
}

export default Home