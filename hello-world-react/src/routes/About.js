import { Link } from "react-router-dom";
import Section from "../Section";

const About = () => {
    return (
        <>
            <main className="mt-4 text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
                <Section>
                    <h3 className="text-xl font-normal">About Hello React!</h3>
                    <p className="mt-1 text-md text-gray-700 font-light">
                        This app contains components that illustrate everything that I have learned about React so far.
                    </p>
                    <p className="mt-1 text-md text-gray-700 font-light">
                        The use of React Router allows you to go back via this{' '}
                        <Link to="/" className="text-blue-500 border-blue-400 hover:border-b">link to the home page</Link>,{' '}
                        <i>or</i> by using the back button of your browser.
                    </p>
                </Section>
            </main>
        </>
    )
};

export default About;
