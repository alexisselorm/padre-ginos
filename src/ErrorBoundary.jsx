import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError:false }

  constructor(props) {
    super(props);
    
  }
  static getDerivedStateFromError(){
    return {hasError:true}
  } 

  componentDidCatch(error,info){
    // This is where you would normally log errors to sentry /trackjs etc

    console.error("ErrorBOunday caught some error",error,info);
  }


  render() { 
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>There was an error with this page.
            <Link to='/'>Click here to go back to home page</Link>
          </p>
        </div>
      );
    }

    return this.props.children;

  }
}
 
export default ErrorBoundary;
