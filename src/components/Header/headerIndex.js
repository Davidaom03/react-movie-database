import React from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './HeaderStyles';
import ErrorBoundary from '../ErrorBoundary';

const Header = () => (
    <Wrapper>
        <Content>
            <ErrorBoundary>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </ErrorBoundary>
            <ErrorBoundary>
                <TMDBLogoImg src={TMDBLogo} alt='rmdb-logo' />
            </ErrorBoundary>
        </Content>
    </Wrapper>
);

export default Header;