
import { FC } from "react";
import { BugButton } from "app/providers/ErrorBoudary";

const AboutPage: FC = () => {
    return (
        <>
            <p>{"О сайте"}</p>
            <BugButton />
        </>
    );
};

export default AboutPage;
