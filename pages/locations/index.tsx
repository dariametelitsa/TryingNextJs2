import { API } from "assets/api/api";
import { LocationType, ResponseType } from "assets/api/rick-and-morty-api";
import { Header } from "components/Header/Header";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { useQuery } from "@tanstack/react-query";

// export const getStaticProps = async () => {
//     const locations = await API.rickAndMorty.getLocations();
//
//     return {
//         props: {
//             locations
//         }
//     }
// }

// type Props = {
//     locations: ResponseType<LocationType>
// }

const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET',
    }).then(res => res.json());
}

const Locations = () => {

    const {data: locations} = useQuery<ResponseType<LocationType>>(['locations'], getLocations);

    if (!locations) return null;

    const locationsList = locations.results.map(location => (
        <div key={location.id}>{location.name}</div>
    ))
    return (
        <PageWrapper>
            <Header/>
            {locationsList}
        </PageWrapper>
    );
};

export default Locations