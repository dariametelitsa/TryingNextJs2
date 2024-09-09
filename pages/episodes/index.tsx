import { API } from "assets/api/api";
import { EpisodeType, ResponseType } from "assets/api/rick-and-morty-api";
import { Header } from "components/Header/Header";
import { PageWrapper } from "components/PageWrapper/PageWrapper";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes();
    if(!episodes) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            episodes
        }
    }
}

type Props = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: Props) => {
    const {episodes} = props;

    const episodesList = episodes.results.map(character => (
        <div key={character.id}>{character.name}</div>
    ))
    return (
        <PageWrapper>
            <Header/>
            {episodesList}
        </PageWrapper>
    );
};

export default Episodes