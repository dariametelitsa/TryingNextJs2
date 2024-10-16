import { API } from "assets/api/api";
import { EpisodeType, ResponseType } from "assets/api/rick-and-morty-api";
import { Header } from "components/Header/Header";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { Card } from "components/Card/Card";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import Locations from "pages/locations";
import { GetServerSideProps } from "next";

export const getServerSideProps:GetServerSideProps = async ({res}) => {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-white-revalidate=100')
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

    const episodesList = episodes.results.map(episode => (
        <Card key={episode.id} name={episode.name} />
    ))
    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    );
};

Episodes.getLayout = getLayout;
export default Episodes