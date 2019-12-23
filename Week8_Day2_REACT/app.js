

const Paragraph = (props) => {
    console.log(props);
    return (

        <p>{props.text} <br /> {props.text2}</p>   /* MORA SVE U JEDNOM REDU */                      /*   svaki const je komponenta/funkcija */

    )
}



const Separator = () => {
    return (
        <hr></hr>
    )
}


const DataArray = [
    "Orange",
    "Apple",
    "Banana",
    "Lemon"
]

const ReactElementsArray = DataArray.map((data) => {
    return (                                                       /*  Nacin 1 */
        <li>{data}</li>
    )
});

const FruitsList = (props) => {
    return <li>{props.fruitName}</li>                           /*    Nacin 2 i Nacin 3  */

}

const App = (props) => {
    return (
        <div>
            <h1>This is title!</h1>
            <Separator />
            <Paragraph text="Ovo je tekst" text2="Tekst 2" />      {/* mi propsu dodeljujemo .text i .text2 koji je property Paragraph objekta (const) */}
            <ul>List of fruits 1: {ReactElementsArray}  </ul>                          {/*  Nacin 1 */}
            <ul>List of fruits 2:
                <FruitsList fruitName="Banana" />
                <FruitsList fruitName="Apple" />                      {/*   Nacin 2 */}
                <FruitsList fruitName="Strawberry" />
                <FruitsList fruitName="Cranberry" />
            </ul>

            <ul>List of fruits 3:
                {DataArray.map(product => <FruitsList fruitName={product} />)}       {/*    Nacin 3 */}
            </ul>
        </div>
    )
}







const rootElement = document.querySelector(".root");
ReactDOM.render(<App />, rootElement);