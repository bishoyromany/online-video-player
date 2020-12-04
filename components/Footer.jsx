import {Paper, Container} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
    return (
        <div id="footer">
            <Container>
                <Paper>
                    This Online Video Player Page Was Created With <FavoriteIcon /> By <a href="https://github.com/bishoyromany" target="_blank">Bishoy Romany</a>
                </Paper>
            </Container>
        </div>

    )
}

export default Footer;