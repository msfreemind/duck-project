import DuckForm from './duck_form';

function Root() {
  return (
    <div>
      <h1>The Duckfeeding Project</h1>

      <h2>Calling on duckfeeders around the world!</h2>

      <p>I've spent my entire career researching ducks. I've made a great deal of progress, <b>but now I need your help. </b>
      Whenever you feed ducks, or see other people feeding ducks, please come here and submit the details. The future of duck science may depend on it.</p>
    
      <DuckForm />
    </div>
  );
}

export default Root;
