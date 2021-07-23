import DuckFormContainer from './duck_form_container';

const LandingPage = () => {
  return (
    <div>
      <h2>Calling on duckfeeders around the world!</h2>

      <p>I've spent my entire career researching ducks. I've made a great deal of progress, <b>but now I need your help. </b>
      Whenever you feed ducks, or see other people feeding ducks, please come here and submit the details. The future of duck science may depend on it.</p>

      <DuckFormContainer />
    </div>
  );
}

export default LandingPage;