import DuckForm from './duck_form';

function Root() {
  return (
    <div>
      <h1>The Duckfeeding Project</h1>

      <h2>Calling on duckfeeders around the world!</h2>

      <p>I am a scientist who has spent my entire career researching ducks. I've made a great deal of progress, but now I need the help of all you people out there.</p>
      <p>Whenever you happen to feed ducks, or see other people feeding ducks, please come to this site and input the details of the event. The future of duck science may depend on it.</p>
    
      <DuckForm />
    </div>
  );
}

export default Root;
