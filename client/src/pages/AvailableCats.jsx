import { Cats } from '../components/Cats'

function AvailableCats() {
  return (
    <div>
      <section id="heading" className="available-cats">
        <div className="flex-row">
          <h2 className="section-title">Available Cats</h2>
        </div>
        <div className="projects">
          <Cats img={'./images/'} imgAlt={''} name={''} age={''} gender={''} bio={''} />
          <Cats img={'./images/'} imgAlt={''} name={''} age={''} gender={''} bio={''} />
        
        </div>
      </section>
    </div>
  );
}

export default AvailableCats;