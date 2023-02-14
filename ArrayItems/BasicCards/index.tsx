import React, { FC } from "react";
import { iAllData } from "@/utility/type";
import BasicCard from "@/components/BasicCard";

interface Props {
    cardList: Array<iAllData>,
    lastBookElementRef: any
}

const BasicCards: FC<Props> = ({ cardList, lastBookElementRef }) => {

    return <>

        {cardList.map((card: iAllData, key: number) => {
            if (cardList.length === key + 1) {
                return <BasicCard key={card.id} cardPost={card} innerRef={lastBookElementRef} />

            } else {

                return <BasicCard key={card.id} cardPost={card} />
            }
        })}
    </>

}

export default BasicCards