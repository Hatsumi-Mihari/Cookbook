import './CardsView.scss'
import Card from '../../components/ui/Card/Card'
import placeholderPicSrc from '../../assets/loaded/category/-1.png'
import { debugUI } from '../../utils/debug';
import { useEffect } from 'react';

function CardsView() {

    useEffect(() => {
        debugUI("CardsView", "Mounted");
    }, [])

    return (
        <>
            <div className="CradsViewMain">
                <div className="CradsViewConteiner">
                    {Array.from({ length: 9 }, (_, index) => (
                        <Card
                            id={index}
                            label={`Amphibia ${index + 1}`}
                            imgURL={placeholderPicSrc}
                            onClick={() => {debugUI("DebugUIView", "card");}}
                        />
                    ))}
                </div>
            </div>

        </>

    );
}

export default CardsView;