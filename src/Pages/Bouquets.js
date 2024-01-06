import BouquetList from "../Component/BouquetList";


function Bouquets(props) {
    return (
        <div><h1>Les bouquets de fleurs</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <BouquetList Bouquet={props.Bouquet[0]} />
                <BouquetList Bouquet={props.Bouquet[1]} />
                <BouquetList Bouquet={props.Bouquet[2]} />
            </div>
        </div>
    )
}
export default Bouquets;
