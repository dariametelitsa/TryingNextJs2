import Image, { StaticImageData } from "next/image";
import { CharacterStatusType } from "assets/api/rick-and-morty-api";

type Props = {
    status: CharacterStatusType
    src: StaticImageData
};
export const Status = (props: Props) => {
    const {status, src} = props
    return (
        <>
            <Image src={src} alt={'Is a person alive'} width={14} height={14}/>
        </>
    );
};