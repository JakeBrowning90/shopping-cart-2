import FeatureCard from "./FeatureCard";

function PageHome({featured}) {
    return (
        <main className="pageHome">
            <div className="featureDiv">
                <h1 className="featureTitle">Featured items:</h1>
                {/* <FeatureCard item={featured[0]}/> */}
                <ul className="featureList">
                {featured.map((item) => {
                    return <li key={item.key}>
                        <FeatureCard item={item} />
                    </li>
                })}
            </ul>
            </div>
        </main>
    )
}

export default PageHome;