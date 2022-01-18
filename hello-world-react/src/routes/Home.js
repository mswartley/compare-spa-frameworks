import { Link } from "react-router-dom";
import Section from "../Section";

const Home = () => {
    return (
        <>
            <Section>
                <h3 className="text-xl font-normal">Welcome to my sample React app!</h3>
                <p className="mt-1 text-md text-gray-700 font-light">
                    I've made a few components. Use the navigation links above to check them out.
                </p>
                <p className="mt-1 text-md text-gray-700 font-light">
                    There is also an <Link to="/about" className="text-blue-500 hover:border-b hover:border-blue-400">about page</Link>{' '}
                    that illustrates the use of client-side routing with React Router.
                </p>
            </Section>
        </>
    )
};

export default Home;
