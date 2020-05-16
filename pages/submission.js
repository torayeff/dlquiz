import React from "react";
import Layout from "../components/Layout";

class Submission extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout title={"Submission"}>
        <h4 className="centered-info">Your answers were successfully submitted!</h4>
      </Layout>
    );
  }
}

export default Submission;