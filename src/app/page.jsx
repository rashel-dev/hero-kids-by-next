import Products from "@/Components/Home/Products";
import Banner from "./../Components/Home/Banner";
export default function Home() {
    return (
        <div className="">
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Products></Products>
            </section>
        </div>
    );
}
