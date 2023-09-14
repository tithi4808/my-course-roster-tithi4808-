import Cart from "./Cart";
import Credit from "./Credit";
import Remaining from "./Remaining";

const Home = () => {
    return (
        <div className='w-1/3 p-4 gap-4'>
            <div className="border-2 p-8 rounded-lg ">
                <Remaining></Remaining>
                <hr />
            <Cart></Cart>
            <hr />
            <Credit></Credit>
            </div>

            
            
        </div>
    );
};

export default Home;