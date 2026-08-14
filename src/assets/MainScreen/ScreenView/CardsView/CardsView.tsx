import './CardsView.scss'
import Card from './Card/Card';
import { useAppSelector } from '../../../../store/Hooks/useAppHooks';

interface ICardsView {
    idsRender: number[],
    callbackUpdateRedner: React.Dispatch<React.SetStateAction<number[]>>
}

function CardsView(props: ICardsView) {
    const content = useAppSelector((state) => state.AppState.content);
    const loaded = useAppSelector((state) => state.AppState.readyLoad);
    const index = useAppSelector((state) => state.AppState.index_table);

    return (
        <>
            {loaded ? <>
                <div className="CradsViewMain">
                    <div className="CradsViewConteiner">
                        {props.idsRender.map((id) => {
                            const itemId = index?.Index_table.find((item) => item.id === id);
                            return itemId?.index !== undefined && content?.items[itemId.index] !== undefined ?
                                
                                    <Card
                                        key={id}
                                        item={content?.items[itemId.index]}
                                        handlerUpdate={props.callbackUpdateRedner}

                                    />

                                 : <>undefined cards view ID = {id}</>
                        })}
                    </div>
                </div>
            </> : <></>}
        </>

    );
}

export default CardsView;