const Characteristics = () => {
    const {characteristics} = JSON.parse(window.localStorage.getItem('currentProduct'));

    const renderCharacteristics = () => {
        return characteristics.map(item => {
            return <div key={item.name}><span>{item.name}</span><span className="bold">{item.value}</span></div>
        });
    }

    const elements = renderCharacteristics();

    return (
        <>
            <h3>Characteristics</h3>
            <div className="characteristics">
                {elements}
            </div>
        </>
    );
};

export default Characteristics;