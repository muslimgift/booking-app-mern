import titles from "../title/titles";

const Hero=()=>{
    return (
        <div className="bg-blue-800 pb-16">
            <div className="container mx-auto flex flex-col gap-2">
                <h1 className="text-5xl text-white font-bold">
                {titles.title2}
                </h1>

                <p className="text-2xl text-white">
                {titles.title3}
                </p>
            </div>
        </div>
    );
};
export default Hero;
